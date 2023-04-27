import React from 'react'
import styles from '@/pages/Main/Main.module.css'
import Hero from "@/pages/Hero/Hero";
import TalentTab from "@/pages/TalentTab/TalentTab";
import ContactBar from "@/pages/ContactBar/ContactBar"
import ChartBar from "@/pages/ChartBar/ChartBar"
import AboutMe from "@/pages/AboutMe/AboutMe";
import Comments from "@/pages/Comments/Comments";
import GoodbyeBar from "@/pages/GoodbyeBar/GoodbyeBar";


function Main() {

    return (
        <>
            <main className={styles.main}>

                <Hero/>
                <ContactBar/>
                <TalentTab/>
                <ChartBar/>
                <AboutMe/>
                <Comments/>
                <GoodbyeBar/>
            </main>
        </>
    )
}

export default Main