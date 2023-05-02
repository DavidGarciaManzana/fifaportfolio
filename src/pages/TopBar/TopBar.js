import React from "react"
import styles from '@/pages/TopBar/TopBar.module.css'
import Button from "@/pages/Button/Button"
import {Linkedin} from "react-feather"
import {useRouter} from "next/router";

function TopBar() {
    const router = useRouter()
    const {locale} = useRouter();
    let changeLanguage = (event) => {
        if (locale === 'en') {
            router.push('/', '/', {locale: 'es'})
        } else {
            router.push('/', '/', {locale: 'en'})
        }
    };
    return (<header className={styles.topBar}>
            <select defaultValue={locale === 'es' ? 'es' : 'en'} name="" id="" className={styles.languageSelect}
                    onChange={changeLanguage}>
                <option value="en">En</option>
                <option value="es">Es</option>
            </select>
            <h1 className={styles.title}>David García</h1>
            <Button className={styles.rightButton}>
                <a href='https://www.linkedin.com/in/davidgarciaman/' target="_blank">
                    <Linkedin/>
                </a>
            </Button>
        </header>)
}

export default TopBar