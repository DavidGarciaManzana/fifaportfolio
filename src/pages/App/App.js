import React from "react"
import styles from './App.module.css'
import TopBar from '@/pages/TopBar/TopBar'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
import Head from "next/head";

function App() {
    const {t} = React.useContext(LanguageContext);
    return (
        <>
            <Head><title>{t?.title}</title></Head>
            <div className={styles.appContainer}>
                <TopBar></TopBar>

            </div>
        </>
    )
}

export default App