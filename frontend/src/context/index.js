import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
  const [getSenderEmail, setgetSenderEmail] = useState("");
  const [error, setError] = useState(false);

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
  
  return (
    <AppContext.Provider
      value={{
        getSenderEmail,
        handleSenderEmail,
        handleNavigate,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
