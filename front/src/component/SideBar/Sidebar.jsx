import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}
            onClick={toggleSidebar}
        >aca
            <div className={styles.option}>Opción 1</div>
            <div className={styles.option}>Opción 2</div>
            <div className={styles.option}>Opción 3</div>
        </div>
    );
};


