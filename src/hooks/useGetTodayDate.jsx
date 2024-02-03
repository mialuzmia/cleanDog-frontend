import { useEffect, useState } from "react";

export const useGetTodayDate = () => {
  
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const today = new Date(); // createsa new date obj with today date
    const day = ('0' + today.getDate()).slice(-2); // gets the day from the obj, puts a 0 before to format and slice(-2) to get only the last to characters
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // sums 1 because the month is returned from 0 to 11 (january is 0);
    const year = today.getFullYear();
    
    setTodayDate(`${year}-${month}-${day}`)
  
  }, []);
  

  return { todayDate }
};