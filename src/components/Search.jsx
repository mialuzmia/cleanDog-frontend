import { useState } from 'react';
import styles from '../styles/components/search.module.scss';

const Search = () => {
  const [date, setDate] = useState('');
  const [bigDogNumber, setBigDogNumber] = useState(0);
  const [smallDogNumber, setSmallDogNumber] = useState(0);

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value + 'T00:00:00'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(date.getDay());
    console.log('small dogs: ', smallDogNumber);
    console.log('big dogs: ', bigDogNumber);

  }

  return (
    <form className={styles.search__container} onSubmit={handleSubmit}>
      <label className={styles.date__container}>
        <span>Qual dia você quer dar banho no seu doguinho?</span>
        <input type="date" onChange={handleDateChange} value={date}/>
      </label>

      <label className={styles.number__container}>
        <span>Quantos cachorros pequenos você tem?</span>
        <input 
          type="number" 
          onChange={e => setSmallDogNumber(e.target.value)} 
          value={smallDogNumber}
        />
      </label>

      <label className={styles.number__container}>
      <span>Quantos cachorros granders você tem?</span>
        <input 
          type="number" 
          onChange={e => setBigDogNumber(e.target.value)} 
          value={bigDogNumber}
        />
      </label>

      <button type='submit'>submit</button>
    </form>
  )
}

export default Search