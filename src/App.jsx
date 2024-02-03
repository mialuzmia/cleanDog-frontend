// styles
import styles from './styles/components/app.module.scss';

//components
import SearchForm from './components/SearchForm';
import Router from './Router';

//hooks
import { useGet } from './hooks/useGet';

function App() {
  
  const { data } = useGet('https://clean-dog.onrender.com/');
  console.log(data);
  return (
    <main className={styles.app__container}>
      <Router />
      {/* <SearchForm petshops={data} /> */}
    </main>
  )
}

export default App
