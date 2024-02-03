import styles from '../styles/components/search.module.scss';

const Search = () => {
  return (
    <div className={styles.search__container}>
      <label className={styles.date__container}>
        <span>Qual dia você quer dar banho no seu doguinho?</span>
        <input type="date" />
      </label>

      <label className={styles.number__container}>
        <span>Quantos cachorros pequenos você tem?</span>
        <input type="number" />
      </label>

      <label className={styles.number__container}>
      <span>Quantos cachorros granders você tem?</span>
        <input type="number" />
      </label>
    </div>
  )
}

export default Search