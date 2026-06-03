import React from 'react';
import { motion } from 'framer-motion';
import styles from './SecaoPais.module.css';

export default function SecaoPais() {
  return (
    <section id="pais" className={styles.paisSection}>
      
      {/* ================= SEÇÃO DA MÃE ================= */}
      <div className={styles.sectionHeader}>
        <h2 className={`${styles.mainTitle} ${styles.mae}`}>✨ Minha Mãe, Minha Rainha</h2>
        <div className={styles.titleLineMother}></div>
      </div>

      {/* Foto Mãe 1 */}
      <div className={styles.row}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagMae}>👑 O Começo</span>
          <h3 className={styles.nameTitle}>O início da nossa jornada</h3>
          <p className={styles.description}>
            Mãe, olhar para as nossas primeiras memórias me faz lembrar do tamanho do seu sacrifício e dedicação desde o primeiro dia. Você abriu mão de sonhos para que os meus pudessem nascer. Seu colo sempre foi o remédio mais eficaz contra qualquer medo do mundo lá fora. Obrigado por me segurar tão forte.
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            {/* Incluída a pasta /imagemmae/ antes do nome do arquivo */}
            <img src="/imagemmae/mae-foto1.jpg" alt="Mãe Momento 1" className={styles.foto} />
          </div>
        </div>
      </div>

      {/* Foto Mãe 2 */}
      <div className={styles.rowInverse}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagMae}>💝 Cotidiano</span>
          <h3 className={styles.nameTitle}>Os detalhes que constroem a vida</h3>
          <p className={styles.description}>
            São nos momentos mais simples do dia a dia, nas conversas de cozinha ou no café da manhã preparado com carinho, que percebo a grandiosidade da sua presença. Suas palavras doces servem como guia prático e bússola moral para as decisões que tomo diariamente. Você me ensinou a ter empatia e respeito.
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            {/* Incluída a pasta /imagemmae/ e corrigido para .jpg minúsculo */}
            <img src="/imagemmae/mae-foto2.jpg" alt="Mãe Momento 2" className={styles.foto} />
          </div>
        </div>
      </div>

      {/* Foto Mãe 3 */}
      <div className={styles.row}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagMae}>🕊️ Porto Seguro</span>
          <h3 className={styles.nameTitle}>Para sempre minha gratidão</h3>
          <p className={styles.description}>
            Se hoje eu consigo andar de cabeça erguida e buscar o meu espaço no mundo, é porque você plantou coragem no meu peito. Essa homenagem é um reflexo mínimo do orgulho gigante que tenho de carregar o seu sangue. Prometo honrar cada ensinamento e fazer valer cada noite de acesso perdida por mim. Te amo!
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            {/* Incluída a pasta /imagemmae/ e corrigido para .jpg minúsculo */}
            <img src="/imagemmae/mae-foto3.jpg" alt="Mãe Momento 3" className={styles.foto} />
          </div>
        </div>
      </div>


      {/* ================= SEÇÃO DO PAI ================= */}
      <div className={styles.sectionHeader}>
        <h2 className={`${styles.mainTitle} ${styles.pai}`}>💼 Meu Pai, Meu Grande Exemplo</h2>
        <div className={styles.titleLineFather}></div>
      </div>

      {/* Foto Pai 1 */}
      <div className={styles.row}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagPai}>🛡️ Proteção</span>
          <h3 className={styles.nameTitle}>A força silenciosa que nos protege</h3>
          <p className={styles.description}>
            Pai, olhar para essa foto me traz um sentimento imediato de segurança. Desde a infância, a sua presença firme e o seu abraço forte foram os pilares que sustentaram a nossa casa. Suas atitudes sempre falaram mais alto que as palavras, mostrando o que significa ser uma pessoa de caráter.
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            <img src="/imagempai/pai-foto1.jpg" alt="Meu Pai 1" className={styles.foto} />
          </div>
        </div>
      </div>

      {/* Foto Pai 2 */}
      <div className={styles.rowInverse}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagPai}>🧠 Valores</span>
          <h3 className={styles.nameTitle}>Lições de trabalho e perseverança</h3>
          <p className={styles.description}>
            Com você aprendi o valor do trabalho duro, da honestidade inabalável e da resiliência diante dos problemas. Ver você sorrir, mesmo após os dias mais cansativos, me ensinou a encarar a vida com otimismo e coragem. Você não é apenas meu pai, é o espelho onde quero me enxergar no futuro.
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            <img src="/imagempai/pai-foto2.jpg" alt="Meu Pai 2" className={styles.foto} />
          </div>
        </div>
      </div>

      {/* Foto Pai 3 */}
      <div className={styles.row}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.tagPai}>❤️ Orgulho</span>
          <h3 className={styles.nameTitle}>Sua história vive em mim</h3>
          <p className={styles.description}>
            Obrigado por vibrar com cada conquista minha e por segurar minha mão quando as coisas não saíram como planejado. Saber que tenho você na torcida me dá forças para enfrentar qualquer obstáculo. Tenho um orgulho imensurável de ser seu filho e de compartilhar tantos sorrisos bonitos como os dessa foto.
          </p>
        </motion.div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.molduraClean}>
            <img src="/imagempai/pai-foto3.jpg" alt="Meu Pai 3" className={styles.foto} />
          </div>
        </div>
      </div>

    </section>
  );
}