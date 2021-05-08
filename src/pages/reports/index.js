import React from 'react';
import Header from '../../components/Header';
import Painel from '../../components/Painel';
import styles from './reports.module.scss';

export default function Dashboard() {
    return(
        <div className={styles.sales}>
            <Header />
            <Painel />
        </div>
    );
}