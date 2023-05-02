import React from 'react'
import styles from '@/pages/DownloadCvButton/DownloadCvButton.module.css'
import Button from "@/pages/Button/Button";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
import {useRouter} from "next/router";

function DownloadCvButton() {
    const {locale} = useRouter();
    const {t} = React.useContext(LanguageContext);
    const downloadRef = React.useRef(null);

    const handleDownload = () => {
        downloadRef.current.click();
    };
    return (
        <Button onClick={handleDownload} className={styles.button}>{t?.cv}
            {locale==='en' ? <a ref={downloadRef} href="En_Cv_David_Garcia.pdf" download="En_Cv_David_Garcia"/>:<a ref={downloadRef} href="Es_Cv_David_Garcia.pdf" download="Es_Cv_David_Garcia"/>}
        </Button>
    );
}

export default DownloadCvButton