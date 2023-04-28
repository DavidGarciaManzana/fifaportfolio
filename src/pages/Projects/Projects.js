import React from 'react'
import styles from '@/pages/Projects/Projects.module.css'
import UniqueProject from "@/pages/UniqueProject/UniqueProject";


function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <UniqueProject picture={'lingualentoWeb.png'} link={'https://lingualento.com'} title={'Lingualento'}>
                Write a message, define a tone, a format and a size and you'll get
                your message re-factorized
            </UniqueProject>
            <UniqueProject picture={'refrichefWeb.png'} link={'https://refrichef.vercel.app'} title={'Refrichef'}>
                Put the ingredients you have on your fridge and you'll get a set of ideas
                for dishes you can cook.
            </UniqueProject>
        </div>
    );
}

export default Projects