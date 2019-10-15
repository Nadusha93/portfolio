import React from 'react';
import styles from "./Projects.module.css";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мои проэкты</span>
                <div className={styles.projectsWrapper}>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>ToDo List</span>
                        <span className={styles.derection}>My job of doing the ToDo List </span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Social Network</span>
                        <span className={styles.derection}>My job of doing the Social Network </span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href="">Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Counter</span>
                        <span className={styles.derection}>My job of doing the Counter </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;