import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.quote}>"O amor de família é o maior tesouro da vida." ❤️</p>
      <div className={styles.divider}></div>
      <p className={styles.credits}>
        © 2026 — Criado com orgulho por <span className={styles.authorName}>Juan França</span>
      </p>
    </footer>
  );
}