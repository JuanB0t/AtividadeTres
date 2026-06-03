import React from 'react';
import styles from './Videos.module.css';

export default function Videos() {
  return (
    <section id="videos" className={styles.videoSection}>
      <h3 className={styles.title}>Mensagens em Vídeo</h3>
      <p className={styles.subtitle}>Um registro em vídeo para guardar no coração para sempre.</p>
      
      <div className={styles.videoWrapper}>
        <video controls className={styles.videoElement}>
          <source src="seu-video-aqui.mp4" type="video/mp4" />
          Seu navegador não suporta a exibição de vídeos.
        </video>
      </div>
    </section>
  );
}