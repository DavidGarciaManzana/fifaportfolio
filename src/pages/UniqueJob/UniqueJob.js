import React from 'react'
import styles from '@/pages/UniqueJob/UniqueJob.module.css'
import useTimeBetweenDates from "@/hooks/useTimeBetweenDates";

function UniqueJob({picture, role, place, startingDate, endDate = '', children}) {
//startingDate and endDate must be in format 'Apr 2022'
    const [todayDate, setTodayDate] = React.useState('Present')
    React.useEffect(() => {
        const today = new Date();
        const dobArr = today.toDateString().split(' ');
        const dobFormat = dobArr[1] + ' ' + dobArr[3];
        setTodayDate(dobFormat);
    }, [])


    return (
        <div className={styles.uniqueJobContainer}>
            
            <div className={styles.imageContainer}>
                <img src={picture} alt=""/>
            </div>

            <div className={styles.textContainer}>
                <h2>{role}</h2>
                <h3>{place}</h3>
                {endDate === '' ?
                    <h4 style={{whiteSpace: 'pre-line'}}>{`${startingDate} - ${todayDate} · 
                    ${useTimeBetweenDates(startingDate, todayDate)}`}</h4> :
                    <h4 style={{whiteSpace: 'pre-line'}}>{`${startingDate} - ${endDate} · 
                    ${useTimeBetweenDates(startingDate, endDate)}`}</h4>}

                <h4>Remote</h4>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default UniqueJob