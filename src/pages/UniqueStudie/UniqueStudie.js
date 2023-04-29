import React from 'react'
import styles from '@/pages/UniqueStudie/UniqueStudie.module.css'

function UniqueStudie({picture, place, title, dates, children}) {
    return (
        <div className={styles.uniqueStudiesContainer}>

            <div className={styles.imageContainer}>
                <img className={styles.school} src={picture} alt=""/>
            </div>

            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{children}</p>
                <h4>{dates}</h4>
                <img src={place} alt=""/>
            </div>
        </div>
    );
}

export default UniqueStudie