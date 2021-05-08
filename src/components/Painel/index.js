import React from 'react';
import styles from './painel.module.scss';
import Link from 'next/link';

export default function Painel() {
    return(
        <div className={styles.painel}>
            <img src="logo-corretora.jpg" alt="corretora"/>
            <h2>Corretora Angel Seguros</h2>
            <Link href="sales">
                <button>
                    <i className="fas fa-dollar-sign" />
                    <p>Vendas</p>
                </button>
            </Link>
            <Link href="reports">
                <button>
                    <i className="fas fa-clipboard-list" />
                    <p>Relatórios</p>
                </button>
            </Link>
            <Link href="/">
                <button>
                    <i className="fas fa-sign-out-alt" />
                    <p>logOff</p>
                </button>
            </Link>
        </div>
    );
}