import React from 'react'
import styles from '@/pages/Comments/Comments.module.css'
import {MessageCircle} from 'react-feather'
import UniqueComment from '@/pages/UniqueComment/UniqueComment'
import Button from "@/pages/Button/Button";

function Comments() {
    const [allComments, setAllComments] = React.useState(false)
    return (
        <>
            <div className={styles.commentsContainer}>
                <MessageCircle color={'white'}></MessageCircle>
                <p>Comments</p>

            </div>
            <UniqueComment profilePicture={'sonpp.jpg'} name={'Son HeungMin'} date={'Jan 21st, 12:00 PM'} likes={572}>그는
                착한 남자입니다.</UniqueComment>
            <UniqueComment profilePicture={'javierpp.jpg'} name={'Chicharito'} date={'Feb 17th, 06:32 PM'} likes={1321}>El
                si imagina cosas chingonas</UniqueComment>
            <UniqueComment profilePicture={'pulisicpp.webp'} name={'Christian Pulisic'} date={'Jan 21st, 06:01 AM'}
                           likes={212}>Did you download his CV? That animation looks insane!</UniqueComment>


            {!allComments && (
                <div className={styles.buttonContainer}><Button className={styles.showMoreButton} onClick={() => (setAllComments(true))}>SHOW MORE...</Button></div>)}
            {allComments && (
                <>
                    <UniqueComment profilePicture={'kylianpp.jpg'} name={'Kylian Mbappé'} date={'Apr 16th, 11:03 AM'}
                                   likes={121}>J'ai entendu dire que tu t'entraînes, est-ce que tes compétences s'améliorent
                        ?</UniqueComment>
                    <UniqueComment profilePicture={'ronaldinhopp.jpg'} name={'Ronaldinho'} date={'Feb 17th, 10:32 AM'}
                                   likes={27015}>David é ótimo, ele sabe como dar uma festa.</UniqueComment>
                    <UniqueComment profilePicture={'kanepp.avif'} name={'Harry Kane'} date={'Mar 6st, 16:27 PM'}
                                   likes={1300}>Hey there! I downloaded his résumé and it looks absolutely fantastic! Cheers!</UniqueComment>
                </>)}
        </>
    )
}

export default Comments

