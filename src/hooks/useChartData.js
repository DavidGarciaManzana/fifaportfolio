import React from 'react';


function useChartData(percentage,color) {
    return {
        datasets: [
            {
                data: [percentage, 100-percentage],
                backgroundColor: [
                    color,
                    "#EDEBEB",
                ],
                display: true,
                borderColor: "#D1D6DC"
            }
        ]
    };

}

export default useChartData;