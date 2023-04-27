import React from 'react'
import styles from '@/pages/UniqueComment/UniqueComment.module.css'
import {ThumbsUp, ThumbsDown} from "react-feather";


function UniqueComment({profilePicture, name, date, likes, dislikes = 0, children}) {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentTitle}>
                <img src={profilePicture} alt=""/>
                <p>{name}</p>
                <span>{date}</span>
            </div>
            <div className={styles.commentText}>
                {children}
            </div>
            <div className={styles.commentLikes}>

                <ThumbsUp strokeWidth={1}/>
                <p>{likes}</p>

                <ThumbsDown strokeWidth={1}/>
                <p>{dislikes}</p>
            </div>

        </div>
    );
}

export default UniqueComment