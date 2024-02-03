//styles
import styles from '../styles/components/searchForm.module.scss';

import { useState } from 'react';
import findBestPetshop from '../utils/findBestPetshop';
import PetshopCard from './PetshopCard';
import { useGetTodayDate } from '../hooks/useGetTodayDate';

const SearchForm = ({ petshops }) => {
  const [date, setDate] = useState('');
  const [bigDogsNumber, setBigDogsNumber] = useState(0);
  const [smallDogsNumber, setSmallDogsNumber] = useState(0);
  const [bestPetshop, setBestPetshop] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const { todayDate } = useGetTodayDate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const day = new Date(date + 'T00:00:00').getDay();

    console.log(day);

    const {bestShop, bestPrice} = findBestPetshop(petshops, smallDogsNumber, bigDogsNumber, day)
    setBestPetshop(bestShop);
    setTotalPrice(bestPrice);
    console.log(bestShop.name, bestPrice);
    console.log(bestPetshop, totalPrice);
  }

  return (
    <>
    <form className={styles.search__container} onSubmit={handleSubmit}>
      <label className={styles.date__container}>
        <span>Qual dia você quer dar banho no seu doguinho?</span>
        <input 
          type="date" 
          onChange={e => setDate((e.target.value))} 
          min={todayDate}
          // max='2024-06-30'
          required
        />
      </label>

      <label className={styles.number__container}>
        <span>Quantos cachorros pequenos você tem?</span>
        <input 
          type="number" 
          onChange={e => setSmallDogsNumber(e.target.value)} 
          value={smallDogsNumber}
          min='0'
          required
        />
      </label>

      <label className={styles.number__container}>
      <span>Quantos cachorros grandes você tem?</span>
        <input 
          type="number" 
          onChange={e => setBigDogsNumber(e.target.value)} 
          value={bigDogsNumber}
          min='0'
          required
        />
      </label>

      <button type='submit'>Enviar</button>
    </form>

    {bestPetshop && <PetshopCard 
      name={bestPetshop.name}
      distance={bestPetshop.distance}
      img={bestPetshop.image}
      price={totalPrice}
    />}


    </>
  )
}

export default SearchForm