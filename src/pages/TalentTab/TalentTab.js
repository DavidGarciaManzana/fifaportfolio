import React, {Fragment} from 'react'
import styles from '@/pages/TalentTab/TalentTab.module.css'
import {Tab} from '@headlessui/react'
import TechStack from "@/pages/TechStack/TechStack";
import Projects from "@/pages/Projects/Projects";

function TalentTab() {
    return (
        <div className={styles.group}>
            <Tab.Group >
                <Tab.List className={styles.tabList}>

                    <Tab as={Fragment} className={styles.tab} >
                        {({selected}) => (
                            <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                                Tech Stack
                            </button>
                        )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab} >
                        {({selected}) => (
                        <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                            Projects
                        </button>
                    )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                        <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                            Experience
                        </button>
                    )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                        <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                            Contact
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
                    <Tab.Panel>Content 3</Tab.Panel>
                    <Tab.Panel>Content 4</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default TalentTab

