// styles
import styles from './styles/components/app.module.scss';

//components
import Search from './components/Search';

//hooks
import { useGet } from './hooks/useGet';

function App() {
  
  const { data } = useGet('https://clean-dog.onrender.com/');
  console.log(data);
  return (
    <main className={styles.app__container}>
      <Search petshops={data} />
    </main>
  )
}

export default App
