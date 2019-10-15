import React from 'react';
import styles from "./Main.module.css";


function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Надя <span> Христенко </span></span>
                    <h1>Я front-end разработчик!</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}/>
                    <img src="" alt="" className=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;