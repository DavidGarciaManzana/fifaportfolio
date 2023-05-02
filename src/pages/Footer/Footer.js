import React from 'react'
import styles from '@/pages/Footer/Footer.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function Footer (){
    const {t} = React.useContext(LanguageContext);
    return (
        <>
            <footer className={styles.footerContainer}>
                <p>{t?.inspired} <a href={'https://futbin.com'}>FUTBIN</a> {t?.and} <a href={'https://www.ea.com/games/fifa'}>FIFA</a></p>

            </footer>
        </>
    )
}

export default Footer