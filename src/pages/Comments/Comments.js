import React from 'react'
import styles from '@/pages/Comments/Comments.module.css'
import {MessageCircle} from 'react-feather'
import UniqueComment from '@/pages/UniqueComment/UniqueComment'

function Comments() {
    return (
        <>
            <div className={styles.commentsContainer}>
                <MessageCircle color={'white'}></MessageCircle>
                <p>Comments</p>

            </div>
            <UniqueComment profilePicture={'sonpp.jpg'} name={'Son HeungMin'} date={'Jan 21st, 12:00 PM'} likes={572}>그는 착한 남자입니다.</UniqueComment>
            <UniqueComment profilePicture={'javierpp.jpg'} name={'Chicharito'} date={'Feb 17th, 06:32 PM'} likes={1321}>El si imagina cosas chingonas</UniqueComment>
            <UniqueComment profilePicture={'kylianpp.jpg'} name={'Kylian Mbappé'} date={'Apr 16th, 11:03 AM'} likes={121}>J'ai entendu dire que tu t'entraînes, est-ce que tes compétences s'améliorent ?</UniqueComment>
        </>
    )
}

export default Comments

