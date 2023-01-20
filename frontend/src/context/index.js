import { createContext, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
  const [getSenderEmail, setgetSenderEmail] = useState("");
  const [error, setError] = useState(false);
  const [uploadFile, setUploadFile] = useState({});
  const selectFile = useRef();

  const navigate = useNavigate();

  const handleSenderEmail = (e) => {
    setgetSenderEmail(e.target.value);
  };

  const handleNavigate = (e) => {
    e.preventDefault();

    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(getSenderEmail)) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      navigate("/add-recipent");
    }
  };

  const handleSelectFile = (e) => {
    selectFile.current.click();
    setUploadFile(e.target.files[0]);
  };

  // console.log(uploadFile);

  return (
    <AppContext.Provider
      value={{
        getSenderEmail,
        handleSenderEmail,
        handleNavigate,
        error,
        handleSelectFile,
        selectFile,
        uploadFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
