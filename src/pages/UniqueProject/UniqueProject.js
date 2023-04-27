import React from 'react'
import styles from '@/pages/UniqueProject/UniqueProject.module.css'
import {ArrowRight} from 'react-feather'
function UniqueProject({picture, title,link, children}) {
    return (
        <div className={styles.projectContainer}>
            <img src={picture} alt=""/>
            <div className={styles.text}>
                <h1>{title}</h1>
                <p>{children}</p>
                <a href={link} target={"_blank"}>
                    <p>View Project <ArrowRight strokeWidth={2} height={20}/></p>
                </a>
            </div>
        </div>
    );
}

export default UniqueProject