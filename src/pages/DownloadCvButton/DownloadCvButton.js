import React from 'react'
import styles from '@/pages/DownloadCvButton/DownloadCvButton.module.css'
import Button from "@/pages/Button/Button";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function DownloadCvButton({animationFinished, changeState}) {
    const {t} = React.useContext(LanguageContext);

    const handleDownload = () => {
        changeState(true)
    };
    return (
        <Button onClick={handleDownload}
                className={`${styles.button} ${animationFinished ? styles.buttonInvisible : ''}`}>{t?.cv}
        </Button>
    );
}

export default DownloadCvButton