import React, {Fragment} from 'react'
import styles from '@/pages/TalentTab/TalentTab.module.css'
import {Tab} from '@headlessui/react'
import TechStack from "@/pages/TechStack/TechStack";

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
                            Tab 2
                        </button>
                    )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                        <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                            Tab 3
                        </button>
                    )}
                    </Tab>

                    <Tab as={Fragment} className={styles.tab}>
                        {({selected}) => (
                        <button className={`${styles.button} ${selected ? styles.selected : styles.notSelected} `}>
                            Tab 4
                        </button>
                    )}
                    </Tab>

                </Tab.List>
                <Tab.Panels className={styles.panels}>
                    <Tab.Panel>
                        <TechStack/>
                    </Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                    <Tab.Panel>Content 4</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default TalentTab

