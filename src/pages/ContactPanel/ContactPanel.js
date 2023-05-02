import React from 'react'
import styles from '@/pages/ContactPanel/ContactPanel.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function ContactPanel() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.techStackContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.arrow} src="arrow.png" alt=""/>
            </div>
            <p className={styles.title}>{t?.contactMessage}
            </p>

        </div>
    );
}

export default ContactPanel