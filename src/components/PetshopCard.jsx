import styles from '../styles/components/petshopCard.module.scss';

import { MapPin } from '@phosphor-icons/react';

const PetshopCard = () => {
  return (
    <>
    <h2>Resultado: </h2>
    <div className={styles.card__container}>
      <div className={styles.title__container}>
        <img src="https://images.pexels.com/photos/16991194/pexels-photo-16991194/free-photo-of-animal-bicho-cachorro-cao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h3>Vai rex!</h3>
      </div>

      <p>Preço Total: R$ 150,00</p>
      
      <div className={styles.distance__container}>
        <MapPin  className={styles.distance__icon}/>
        <span>800m</span>
      </div> 
    </div>
    </>
  )
}

export default PetshopCard