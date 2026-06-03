import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
    <header className={styles.header}>
        <div className={styles.container}>
        <h1 className={styles.logo}>Nossa Família ❤️</h1>
        <nav className={styles.nav}>
            <a href="#inicio">Início</a>
            <a href="#pais">Nossos Pais</a>
            <a href="#galeria">Memórias</a>
            <a href="#videos">Vídeos</a>
        </nav>
    </div>
    </header>
  );
}