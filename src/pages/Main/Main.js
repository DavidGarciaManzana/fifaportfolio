import React from 'react'
import styles from '@/pages/Main/Main.module.css'
import Hero from "@/pages/Hero/Hero";
import TalentTab from "@/pages/TalentTab/TalentTab";
import ContactBar from "@/pages/ContactBar/ContactBar"
import ChartBar from "@/pages/ChartBar/ChartBar"


function Main() {

    return (
        <>
            <main className={styles.main}>

                <Hero/>
                <ContactBar/>
                <TalentTab/>
                <ChartBar/>

                <p>
                    David is a Mexican software developer.
                    He has a passion for learning and is constantly expanding his knowledge base, drawing inspiration
                    from a
                    diverse range of industries to apply to his work.
                    An abstract thinker who is obsessed with details and prides himself on his ability to collaborate
                    with
                    others effectively.
                    He is an excellent communicator, a great listener, and a team player who is always available to help
                    his
                    colleagues.
                    With his petroleum engineering background, David brings a unique perspective to his work, and his
                    creativity
                    and innovative thinking make him a valuable asset to any team.
                </p>
            </main>
        </>
    )
}

export default Main