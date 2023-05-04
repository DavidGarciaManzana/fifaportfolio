import React from "react"
import styles from './App.module.css'
import TopBar from '@/pages/TopBar/TopBar'
import Main from '@/pages/Main/Main'
import Footer from "@/pages/Footer/Footer";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
import Head from "next/head";

function App() {
    const {t} = React.useContext(LanguageContext);
    const [isCvDownloaded, setIsCvDownloaded] = React.useState(false);
    let manageCvState = (st) => {
        setIsCvDownloaded(st)
    }
    return (
        <>
            <Head>
                <title>{t?.title}</title>
            </Head>
            <div className={styles.appContainer}>
                <TopBar></TopBar>
                <Main state={isCvDownloaded} changeState={manageCvState}></Main>
                <Footer className={!isCvDownloaded ? styles.footer : styles.footerAfterCv}/>
            </div>
        </>
    )
}

export default App