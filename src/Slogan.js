import React from 'react';
import styles from "./Slogan.module.css";

function Slogan() {
    return (
        <div className={styles.slogan}>
<div className={styles.container}>
    <span className={styles.blockTitle}>Рассматриваю варианты удаленной работы</span>
    <a className={styles.btnShow} href="">Нанять меня</a>
</div>
        </div>
    );
}

export default Slogan;