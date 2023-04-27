import React from 'react'
import styles from '@/pages/Footer/Footer.module.css'

function Footer (){
    return (
        <>
            <footer className={styles.footerContainer}>
                <p>Inspired by <a href={'https://futbin.com'}>FUTBIN</a></p>
            </footer>
        </>
    )
}

export default Footer