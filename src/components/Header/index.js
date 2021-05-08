import React from 'react';
import styles from './header.module.scss';

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.plano}>Plano</p>
                <p className={styles.digital}>Digital</p>
            </div>
            <div className={styles.welcome}>
                <p>Olá, Maciel</p>
                <img src="logo-corretora.jpg" alt="corretora" />
            </div>
        </div>
    );
}