import React from 'react';


function useTimeBetweenDates(initialDate, endingDate) {
    const date1 = new Date(initialDate);
    const date2 = new Date(endingDate);

    const years = date2.getFullYear() - date1.getFullYear();
    const months = (date2.getMonth() + 12 * date2.getFullYear()) - (date1.getMonth() + 12 * date1.getFullYear());

    if (years === 0) {
        return `${months} months`;
    } else {
        return `${years} year${years > 1 ? 's' : ''} and ${months % 12} month${months % 12 > 1 ? 's' : ''}`;
    }
}

export default useTimeBetweenDates;