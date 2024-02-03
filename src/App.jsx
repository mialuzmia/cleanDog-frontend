// styles
import styles from './styles/components/app.module.scss';

//components
import SearchForm from './components/SearchForm';
import Router from './Router';

//hooks
import { useGet } from './hooks/useGet';

function App() {

  return (
    <main className={styles.app__container}>
      <Router />
      {/* <SearchForm petshops={data} /> */}
    </main>
  )
}

export default App
