import React from 'react'
import styles from '@/pages/Experience/Experience.module.css'
import Jobs from "@/pages/Jobs/Jobs";
import Studies from "@/pages/Studies/Studies";

function Experience() {
    return (
        <div className={styles.expContainer}>
            <Jobs/>
            <Studies/>
        </div>
    );
}

export default Experience