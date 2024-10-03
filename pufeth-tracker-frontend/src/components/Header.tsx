import React from 'react';
import { ReactComponent as PufferLogo } from '../assets/puffer_logo.svg';
import styles from './styles/header.module.css';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.title}>
            <PufferLogo className={styles.logo}/>
            <h3 className={styles.text}>Puffer Coversion Rate Tracker</h3>
        </div>
    </div>
);

export default Header;