import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heartIcon}>❤️</div>
      <h1 className={styles.title}>Uma Homenagem a Quem me Deu Tudo</h1>
      <p className={styles.subtitle}>
        Obrigado por cada ensinamento, amor incondicional e por serem meu porto seguro. 
        Esta página é um pedacinho da nossa história guardado com carinho.
      </p>
      <div className={styles.minimalLine}></div>
    </header>
  );
}