import React from 'react'
import styles from '@/pages/Hero/Hero.module.css'

function Hero() {
    return (
        <>
            <div className={styles.heroContainer}>
                {/*<div className={styles.imageBackground}>*/}

                {/*</div>*/}
                <img className={styles.imageBackground} src="davidbg.png" alt=""/>
                <img className={styles.fifaCard} src='GARCIA.png' alt=""/>
            </div>
        </>
    )
}

export default Hero