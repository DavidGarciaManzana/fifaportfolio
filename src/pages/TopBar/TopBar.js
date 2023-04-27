import React from "react"
import styles from '@/pages/TopBar/TopBar.module.css'
import Button from "@/pages/Button/Button"
import {Twitter, GitHub, Linkedin} from "react-feather";

function TopBar() {
    return (
        <header className={styles.topBar}>
            <Button className={styles.leftButton}>
                <a href='https://github.com/DavidGarciaManzana' target="_blank">
                    <GitHub></GitHub>
                </a>
            </Button>
            <h1 className={styles.title}>David García</h1>
            <Button className={styles.rightButton}>
                <a href='https://www.linkedin.com/in/davidgarciaman/' target="_blank">
                    <Linkedin/>
                </a>
            </Button>
        </header>
    )
}

export default TopBar