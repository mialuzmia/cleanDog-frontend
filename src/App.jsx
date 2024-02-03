// styles
import styles from './styles/components/app.module.scss';

//components
import Search from './components/Search';

//hooks
import { useGet } from './hooks/useGet';

function App() {
  
  const { data } = useGet('http://localhost:3000');
  console.log(data);
  return (
    <main className={styles.app__container}>
      <Search />
    </main>
  )
}

export default App
