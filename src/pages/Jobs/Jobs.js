import React from 'react'
import styles from '@/pages/Jobs/Jobs.module.css'
import UniqueJob from "@/pages/UniqueJob/UniqueJob";

function Jobs() {
    return (
        <div className={styles.jobsContainer}>
            <h1>Experience</h1>
            <UniqueJob picture={'telepro.jpeg'} role={'Web developer'}
                       place={'Servicios Telepro S.A. de C.V. · Full-time'} startingDate={'Jan 2022'}>
                React, HTML, CSS, and JavaScript on the frontend, and .NET, C#, and Transact-SQL on the backend.
                Experienced in using Scrum methodology to work effectively in a team environment. I am eager to learn
                and implement new technologies to enhance my skills and knowledge.
            </UniqueJob>
            <UniqueJob picture={'freelance.jpg'} role={'Web developer'} place={'Freelance · Full-time'}
                       startingDate={'Mar 2021'} endDate={'Dec 2021'}>
                Experienced in using HTML5, CSS3, Sass, Flexbox, Grid, animations, responsive web design, Git, and
                JavaScript (ReactJs) to build dynamic and visually appealing web applications with intuitive user
                interfaces. Eager to continue growing and developing my skills in web development.
            </UniqueJob>
        </div>
    );
}

export default Jobs