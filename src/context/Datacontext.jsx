import { createContext } from "react";
import { useGet } from "../hooks/useGet";

export const DataContext = createContext();

export const DataContextProvider = ({url, options, children }) => {
  
  const { data, error, loading } = useGet(url, options);

  return(
  <DataContext.Provider value={{ data, error, loading }}>
    { children }
  </DataContext.Provider>
  );
};