import React from 'react'
import styles from '@/pages/Jobs/Jobs.module.css'
import UniqueJob from "@/pages/UniqueJob/UniqueJob";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function Jobs() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.jobsContainer}>
            <h1>{t?.jobExperience}</h1>
            <UniqueJob picture={'Original-EK.png'} role={t?.webDev}
                       place={`ENKONTROL · ${t?.fullTime}`} startingDate={'Apr 2023'} picClassName={styles.ekImage}>
                {t?.enkontrolJob1} <br/> {t?.enkontrolJob2} <br/> {t?.enkontrolJob3} <br/> {t?.enkontrolJob4} <br/> {t?.enkontrolJob5}
            </UniqueJob>
            <UniqueJob picture={'telepro.jpeg'} role={t?.webDev}
                       place={`Servicios Telepro S.A. de C.V. · ${t?.fullTime}`} startingDate={'Mar 2022'} endDate={'Apr 2023'}>
                {t?.teleproJob1} <br/> {t?.teleproJob2} <br/> {t?.teleproJob3}
            </UniqueJob>
            <UniqueJob picture={'freelance4.png'} role={t?.webDev} place={`Freelance · ${t?.fullTime}`}
                       startingDate={'Mar 2021'} endDate={'Mar 2022'}>
                {t?.freelanceJob1}
            </UniqueJob>
        </div>
    );
}

export default Jobs