import { useEffect, useState } from "react";

export const useGetTodayDate = () => {
  
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = ('0' + today.getDate()).slice(-2);
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();
    
    setTodayDate(`${year}-${month}-${day}`)
  
  }, []);
  

  return { todayDate }
};