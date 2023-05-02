import React from 'react'
import styles from '@/pages/AboutMe/AboutMe.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
function AboutMe() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.aboutContainer}>
            <p>
                {t?.aboutMe}
            </p>
        </div>

    );
}

export default AboutMe