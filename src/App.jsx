// styles
import styles from './styles/components/app.module.scss';

//components
import Search from './components/Search';

function App() {
  

  return (
    <main className={styles.app__container}>
      <Search />
    </main>
  )
}

export default App
