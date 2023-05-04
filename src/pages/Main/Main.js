import React from 'react'
import styles from '@/pages/Main/Main.module.css'
import Hero from "@/pages/Hero/Hero";
import TalentTab from "@/pages/TalentTab/TalentTab";
import ContactBar from "@/pages/ContactBar/ContactBar"
import ChartBar from "@/pages/ChartBar/ChartBar"
import AboutMe from "@/pages/AboutMe/AboutMe";
import Comments from "@/pages/Comments/Comments";
import GoodbyeBar from "@/pages/GoodbyeBar/GoodbyeBar";


function Main({state, changeState}) {
    const [contactBarAnimationFinished, setContactBarAnimationFinished] = React.useState(false);
    const [talentTabAnimationFinished, setTalentTabAnimationFinished] = React.useState(false);
    const [chartBarAnimationFinished, setChartBarAnimationFinished] = React.useState(false);
    const [aboutMeAnimationFinished, setAboutMeAnimationFinished] = React.useState(false);
    const [commentsAnimationFinished, setCommentsAnimationFinished] = React.useState(false);

    function handleAnimationEnd() {
        setContactBarAnimationFinished(true);
    }

    function handleTalentTabAnimationEnd() {
        setTalentTabAnimationFinished(true);
    }

    function handleChartBarAnimationEnd() {
        setChartBarAnimationFinished(true);
    }

    function handleAboutMeAnimationEnd() {
        setAboutMeAnimationFinished(true);
    }

    function handleCommentsAnimationEnd() {
        setCommentsAnimationFinished(true);
    }

    return (
        <>
            <main className={!state ? styles.main : styles.mainAfterCv}>
                <Hero fstate={state} fchangeState={changeState}/>


                <ContactBar animationEndState={contactBarAnimationFinished} onTransitionEnd={handleAnimationEnd}
                            className={`${state && styles.contactBarAfterCv} ${contactBarAnimationFinished ? styles.contactBarInvisible : ''}`}/>
                <TalentTab onTransitionEnd={handleTalentTabAnimationEnd} animationEndState={talentTabAnimationFinished}
                           className={`${contactBarAnimationFinished && styles.talentTabAfterCv} ${talentTabAnimationFinished ? styles.talentTabInvisible : ''}`}/>
                <ChartBar onTransitionEnd={handleChartBarAnimationEnd} animationEndState={chartBarAnimationFinished}
                          className={`${talentTabAnimationFinished && styles.chartBarAfterCv} ${chartBarAnimationFinished ? styles.chartBarInvisible : ''}`}/>

                <AboutMe onTransitionEnd={handleAboutMeAnimationEnd} animationEndState={aboutMeAnimationFinished}
                         className={`${chartBarAnimationFinished && styles.aboutMeAfterCv} ${aboutMeAnimationFinished ? styles.aboutMeInvisible : ''}`}/>
                <Comments onTransitionEnd={handleCommentsAnimationEnd} animationEndState={commentsAnimationFinished}
                          className={`${aboutMeAnimationFinished && styles.commentsAfterCv} ${commentsAnimationFinished ? styles.commentsInvisible : ''}`}/>
                {!state && <GoodbyeBar/>}


            </main>
        </>
    )
}

export default Main