//styles
import styles from '../styles/components/search.module.scss';

import { useState } from 'react';
import findBestPetshop from '../utils/findBestPetshop';

const SearchForm = ({ petshops }) => {
  const [date, setDate] = useState('');
  const [bigDogsNumber, setBigDogsNumber] = useState(0);
  const [smallDogsNumber, setSmallDogsNumber] = useState(0);
  const [bestPetshop, setBestPetshop] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);


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
        <input type="date" onChange={e => setDate((e.target.value))} />
      </label>

      <label className={styles.number__container}>
        <span>Quantos cachorros pequenos você tem?</span>
        <input 
          type="number" 
          onChange={e => setSmallDogsNumber(e.target.value)} 
          value={smallDogsNumber}
        />
      </label>

      <label className={styles.number__container}>
      <span>Quantos cachorros grandes você tem?</span>
        <input 
          type="number" 
          onChange={e => setBigDogsNumber(e.target.value)} 
          value={bigDogsNumber}
        />
      </label>

      <button type='submit'>submit</button>
    </form>

    {bestPetshop && <div>
      <h3>O melhot petshop é {bestPetshop.name}</h3>
      <p>Preço: {totalPrice}</p>
    </div>}
    </>
  )
}

export default SearchForm