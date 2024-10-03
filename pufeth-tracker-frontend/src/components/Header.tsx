import React from 'react';
import { ReactComponent as PufferLogo } from '../assets/puffer_logo.svg';
import { ReactComponent as PufferHeaderLeft } from '../assets/puffer_header_left.svg';
import { ReactComponent as PufferHeaderRight } from '../assets/puffer_header_right.svg';
import styles from './styles/header.module.css';

const Header = () => (
    <div className={styles.header}>
        <PufferHeaderLeft />
        <div className={styles.title}>
            <PufferLogo className={styles.logo}/>
            <h3 className={styles.text}>Puffer Coversion Rate Tracker</h3>
        </div>
        <PufferHeaderRight />
    </div>
);

export default Header;