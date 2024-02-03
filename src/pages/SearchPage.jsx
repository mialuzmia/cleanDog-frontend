import styles from '../styles/pages/searchPage.module.scss'

import SearchForm from "../components/SearchForm"

import { useDataContext } from "../hooks/useDataContext"


const SearchPage = () => {
const { data, error, loading } = useDataContext();
console.log(data);

  return (
    <section className={styles.searchpage__container}>
      <SearchForm petshops={data}/>
    </section>
  )
}

export default SearchPage