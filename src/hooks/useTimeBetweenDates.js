import React from 'react';
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";


function useTimeBetweenDates(initialDate, endingDate) {
    const {t} = React.useContext(LanguageContext);
    const date1 = new Date(initialDate);
    const date2 = new Date(endingDate);

    const years = date2.getFullYear() - date1.getFullYear();
    const months = (date2.getMonth() + 12 * date2.getFullYear()) - (date1.getMonth() + 12 * date1.getFullYear());

    if (years === 0) {
        return `${months} ${t?.months}`;
    } else {
        return `${years} ${t?.year}${years > 1 ? 's' : ''} ${t?.and} ${months % 12} ${t?.month}${months % 12 > 1 ? t?.pluralMonth : ''}`;
    }
}

export default useTimeBetweenDates;