import styles from '../styles/components/header.module.scss';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <a href="/">
        <h1>CleanDog</h1>
        <img 
          src="https://cdn.pixabay.com/photo/2016/04/07/18/57/silhouette-1314467_1280.png" 
          alt="" 
        />
      </a>
    </div>
  )
}

export default Header