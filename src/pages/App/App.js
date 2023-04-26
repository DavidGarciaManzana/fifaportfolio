import React from "react"
import styles from './App.module.css'
import TopBar from '@/pages/TopBar/TopBar'
import Main from '@/pages/Main/Main'
import Footer from "@/pages/Footer/Footer";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";
import Head from "next/head";

function App() {
    const {t} = React.useContext(LanguageContext);
    return (
        <>
            <Head>
                <title>{t?.title}</title>

            </Head>
            <div className={styles.appContainer}>
                <TopBar></TopBar>
                <Main></Main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default App