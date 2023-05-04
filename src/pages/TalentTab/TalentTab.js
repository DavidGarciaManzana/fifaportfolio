import React, {Fragment} from 'react'
import styles from '@/pages/TalentTab/TalentTab.module.css'
import {Tab} from '@headlessui/react'
import TechStack from "@/pages/TechStack/TechStack";
import Projects from "@/pages/Projects/Projects";
import Experience from "@/pages/Experience/Experience";
import ContactPanel from "@/pages/ContactPanel/ContactPanel";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function TalentTab({className = '',animationEndState ,...delegated}) {
    const {t} = React.useContext(LanguageContext);
    return (
        <div  className={`${animationEndState ? styles.groupAfterCv :styles.group} ${className}`} {...delegated}>
            <Tab.Group>
                <Tab.List className={styles.tabList}>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                            <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                                {t?.tech}
                            </button>
                        )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                            <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                                {t?.projects}
                            </button>
                        )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                            <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                                {t?.experience}
                            </button>
                        )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                            <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                                {t?.contact}
                            </button>
                        )}
                    </Tab>

                </Tab.List>
                <Tab.Panels className={styles.panels}>
                    <Tab.Panel>
                        <TechStack/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Projects/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Experience/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <ContactPanel/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default TalentTab

