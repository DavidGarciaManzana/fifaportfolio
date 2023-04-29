import React from 'react'
import styles from '@/pages/Studies/Studies.module.css'
import UniqueStudie from "@/pages/UniqueStudie/UniqueStudie";

function Studies() {
    return (
        <div className={styles.studiesContainer}>
            <h1>Education</h1>
            <UniqueStudie picture={'ipn.png'}
                          place={'https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg'}
                          title={'Instituto Politécnico Nacional'} dates={'2016-2020'}>Ingenieria
                Petrolera</UniqueStudie>
            <UniqueStudie picture={'sfu.jpeg'}
                          place={'https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg'}
                          title={'Simon Fraser University'} dates={'2017-2017'}>English Language and Culture Program</UniqueStudie>
        </div>
    );
}

export default Studies