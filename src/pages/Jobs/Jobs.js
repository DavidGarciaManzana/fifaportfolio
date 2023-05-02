import React from 'react'
import styles from '@/pages/Jobs/Jobs.module.css'
import UniqueJob from "@/pages/UniqueJob/UniqueJob";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function Jobs() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.jobsContainer}>
            <h1>{t?.jobExperience}</h1>
            <UniqueJob picture={'telepro.jpeg'} role={t?.webDev}
                       place={`Servicios Telepro S.A. de C.V. · ${t?.fullTime}`} startingDate={'Jan 2022'}>
                {t?.teleproJob}
            </UniqueJob>
            <UniqueJob picture={'freelance4.png'} role={t?.webDev} place={`Freelance · ${t?.fullTime}`}
                       startingDate={'Mar 2021'} endDate={'Dec 2021'}>
                {t?.freelanceJob}
            </UniqueJob>
        </div>
    );
}

export default Jobs