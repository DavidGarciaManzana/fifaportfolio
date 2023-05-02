import React from 'react'
import styles from '@/pages/DownloadCvButton/DownloadCvButton.module.css'
import Button from "@/pages/Button/Button";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function DownloadCvButton() {
    const {t} = React.useContext(LanguageContext);
    return (
        <Button className={styles.button}>{t?.cv}</Button>
    );
}

export default DownloadCvButton