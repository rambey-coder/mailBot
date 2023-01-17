import { createContext, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default ContextProvider;
