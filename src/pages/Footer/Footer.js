import React from 'react'
import styles from '@/pages/Footer/Footer.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function Footer ({className = '', ...delegated}){
    const {t} = React.useContext(LanguageContext);
    return (
        <>
            <footer  className={`${styles.footerContainer} ${className}`} {...delegated}>
                <p>{t?.inspired} <a href={'https://futbin.com'}>FUTBIN</a> {t?.and} <a href={'https://www.ea.com/games/fifa'}>FIFA</a></p>

            </footer>
        </>
    )
}

export default Footer