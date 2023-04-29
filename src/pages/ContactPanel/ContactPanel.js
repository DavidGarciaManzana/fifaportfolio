import React from 'react'
import styles from '@/pages/ContactPanel/ContactPanel.module.css'

function ContactPanel() {
    return (
        <div className={styles.techStackContainer}>
            <img src="arrow.png" alt=""/>
            <p className={styles.title}>You can find me at various places around the web,above this contact panel you
                have a blue bar where you'll find links to visit my GitHub, send me an email, follow me on Twitter, send
                me a Whatsapp or contact me on LinkedIn.
                If everything else fails simply send a message to my personal email Davidgarciama@outlook.com and I'll
                be there faster than you can say 'supercalifragilisticexpialidocious' (or close enough, anyway). 😅
            </p>

        </div>
    );
}

export default ContactPanel