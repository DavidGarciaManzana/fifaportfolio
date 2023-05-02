import React from 'react'
import styles from '@/pages/GoodbyeBar/GoodbyeBar.module.css'
import {GitHub, Twitter} from 'react-feather'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function GoodbyeBar() {
    const {t} = React.useContext(LanguageContext);
    return (
        <div className={styles.goodbyeContainer}>
            <p>
                {t?.goodbye}
            </p>
            <div className={styles.iconContainer}>
                <a href='https://twitter.com/DavidGarciaMa1' target="_blank">
                    <Twitter strokeWidth={1.5} color={'white'}/>
                </a>
                <a href='https://github.com/DavidGarciaManzana' target="_blank">
                    <GitHub strokeWidth={1.5} color={'white'}/>
                </a>

            </div>
        </div>
    );
}

export default GoodbyeBar