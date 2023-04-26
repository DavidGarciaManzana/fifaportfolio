import React from 'react'
import styles from '@/pages/ContactBar/ContactBar.module.css'
import {Mail, GitHub, Twitter, Linkedin, MessageSquare} from 'react-feather'

function ContactBar() {
    return (
        <div className={styles.description}>
            <a href="mailto:Davidgarciama@outlook.com" target="_blank">
                    <Mail  strokeWidth={1.5} color={'white'}/>
            </a>
            <a href='https://github.com/DavidGarciaManzana' target="_blank">
                    <GitHub strokeWidth={1.5} color={'white'}/>
            </a>
            <a href='https://twitter.com/DavidGarciaMa1' target="_blank">
                    <Twitter strokeWidth={1.5} color={'white'}/>
            </a>
            <a href='https://www.linkedin.com/in/davidgarciaman/' target="_blank">
                    <Linkedin strokeWidth={1.5}  color={'white'}/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5547078017" target="_blank">
                    <MessageSquare  strokeWidth={1.5} color={'white'}/>
            </a>





        </div>
    );
}

export default ContactBar