import { useContext } from "react";
import { DataContext } from "../context/Datacontext";

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataCOntext must be inside an DataContextProvider');
  };

  return context;
}