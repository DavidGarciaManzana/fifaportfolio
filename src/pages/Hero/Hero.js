import React from 'react'
import styles from '@/pages/Hero/Hero.module.css'
import DownloadCvButton from "@/pages/DownloadCvButton/DownloadCvButton";

function Hero() {
    return (
        <>
            <div className={styles.heroContainer}>
                <img className={styles.imageBackground} src="davidbg.png" alt=""/>
                <img className={styles.fifaCard} src='GARCIA.png' alt=""/>
                <DownloadCvButton></DownloadCvButton>
            </div>
        </>
    )
}

export default Hero