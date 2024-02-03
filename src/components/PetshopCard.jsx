import styles from '../styles/components/petshopCard.module.scss';

import { MapPin } from '@phosphor-icons/react';

const PetshopCard = ({ name, img, price, distance }) => {
  return (
    <>
    <h2>Resultado: </h2>
    <div className={styles.card__container}>
      <div className={styles.title__container}>
        <img src={img} alt="logo do petshop" />
        <h3>{name}</h3>
      </div>

      <p>Preço Total: R$ {price}</p>
      
      <div className={styles.distance__container}>
        <MapPin  className={styles.distance__icon}/>
        <span>{distance}m</span>
      </div> 
    </div>
    </>
  )
}

export default PetshopCard