import React from 'react'
import styles from '@/pages/Projects/Projects.module.css'
import UniqueProject from "@/pages/UniqueProject/UniqueProject";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";


function Projects() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.projectsContainer}>
            <UniqueProject
                languages={['https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg', 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg']}
                picture={'lingualentoWeb.png'} link={'https://lingualento.com'} title={'Lingualento'}>
                {t?.lingualentoDescription}
            </UniqueProject>
            <UniqueProject languages={['https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg']}
                           picture={'refrichefWeb.png'} link={'https://refrichef.vercel.app'} title={'Refrichef'}>
                {t?.refrichefDescription}
            </UniqueProject>
        </div>
    );
}

export default Projects