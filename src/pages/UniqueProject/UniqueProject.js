import React from 'react'
import styles from '@/pages/UniqueProject/UniqueProject.module.css'
import {ArrowRight} from 'react-feather'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function UniqueProject({picture, title, link, languages = '', children}) {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.projectContainer}>
            <img className={styles.webPicture} src={picture} alt=""/>
            <div className={styles.text}>
                <div className={styles.titleFlagContainer}>
                    <h1>{title}</h1>
                    {languages.length > 0 && languages.map((lang) => (
                        <img src={lang} alt=""/>
                    ))}
                </div>

                <p>{children}</p>
                <a href={link} target={"_blank"}>
                    <p>{t?.viewProject} <ArrowRight strokeWidth={2} height={20}/></p>
                </a>

            </div>

        </div>
    );
}

export default UniqueProject