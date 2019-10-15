import React from 'react';
import styles from "./Skills.module.css";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <div className={styles.headerTitle}>
                    <h2 className={styles.headerTitle}>Мои скиллы</h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.skillsWrapper}>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>HTML & CSS</span>
                        <span className={styles.description}>Good language skills HTML & CSS</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>JS</span>
                        <span className={styles.description}>Good language skills JS </span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>React</span>
                        <span className={styles.description}>Good language skills React </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;