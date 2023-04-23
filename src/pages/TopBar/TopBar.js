import React from "react"
import styles from '@/pages/TopBar/TopBar.module.css'
import Button from "@/pages/Button/Button"
import {Twitter, GitHub} from "react-feather";

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
                <a href='https://twitter.com/DavidGarciaMa1' target="_blank">
                    <Twitter/>
                </a>
            </Button>
        </header>
    )
}

export default TopBar