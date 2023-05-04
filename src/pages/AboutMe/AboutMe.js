import React from 'react'
import styles from '@/pages/AboutMe/AboutMe.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
function AboutMe({className = '',animationEndState ,...delegated}) {
    const {t} = React.useContext(LanguageContext);
    return (
        <div  className={`${animationEndState ? styles.aboutContainerAfterCv :styles.aboutContainer} ${className}`} {...delegated}>
            <p>
                {t?.aboutMe}
            </p>
        </div>

    );
}

export default AboutMe