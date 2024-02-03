import styles from '../styles/components/plusAndMinusButtons.module.scss';

import { Plus, Minus } from '@phosphor-icons/react';


const PlusAndMinusButtons = ({value, setValue}) => {

  const handlePlusCLick = () => {
    setValue(value + 1);
  };

  const handleMinusClick = () => {
    if(value > 0){
      setValue(value - 1)
    }
  }

  return (
    <div className={styles.main__container}>
      <div 
        className={styles.button__container} 
        onClick={handleMinusClick}
      >
        <Minus size={16} color='#FFF'weight="bold" />
      </div>

      <div 
        className={styles.button__container} 
        onClick={handlePlusCLick}
        >
        <Plus size={16} color='#FFF'weight="bold"/>
      </div>
      
    </div>
  )
}

export default PlusAndMinusButtons