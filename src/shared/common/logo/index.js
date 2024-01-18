import React from 'react'
import styles from './logo.module.scss';
const LogoImage = '/assets/logo/logo.png';
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="LogoImage"/>
    </div>
  )
}
