import React from "react"
import {useRouter} from "next/router";
import en from "@/languages/en";
import es from "@/languages/es";

export const LanguageContext = React.createContext({});

let LanguageProvider =({children})=>{
    const {locale} = useRouter();
    let t = locale === 'en' ? en : es

    return (
        <LanguageContext.Provider value={{t}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider