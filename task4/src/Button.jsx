import styles from './Button.module.css';

import React from 'react'

const Button = () => {
  return (
    <div>
      <button className={styles.button}>Click Me</button>
      <p className={styles.para} >Styled using module.css</p>
    </div>
  )
}

export default Button
