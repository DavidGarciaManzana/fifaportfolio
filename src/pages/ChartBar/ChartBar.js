import React from 'react'
import styles from '@/pages/ChartBar/ChartBar.module.css'
import useChartData from "@/hooks/useChartData";
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from "chart.js";
import {crypto} from "next/dist/compiled/@edge-runtime/primitives/crypto";
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

Chart.register(ArcElement);

function ChartBar({className = '',animationEndState ,...delegated}) {
    const {t} = React.useContext(LanguageContext);
    const charData = [
        {id: crypto.randomUUID(), percentage: 80, color: '#7DA336', title: t?.communication},
        {id: crypto.randomUUID(), percentage: 95, color: '#326211', title: t?.creativity},
        {id: crypto.randomUUID(), percentage: 99, color: '#326211', title: t?.collaboration},
        {id: crypto.randomUUID(), percentage: 78, color: '#7DA336', title: t?.timeManagement},
        {id: crypto.randomUUID(), percentage: 90, color: '#7DA336', title: t?.detail}
    ]
    const chartRef = React.useRef();
    const [isChartInView, setIsChartInView] = React.useState(false);
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsChartInView(entry.isIntersecting);
        }, {threshold: 0.1});

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, []);

    return (
        <div className={`${animationEndState ? styles.chartContainerAfterCv :styles.chartContainer} ${className}`} {...delegated} ref={chartRef} style={{flexWrap: isChartInView ? 'wrap' : 'wrap'}}>
            {charData.map((info) => (
                <div className={styles.chart} key={info.id}>
                    <Doughnut className={styles.doughnut}
                              data={useChartData(info.percentage, info.color)}
                              options={{
                                  plugins: {
                                      legend: {
                                          display: false
                                      },
                                      tooltip: {
                                          enabled: false
                                      }
                                  },
                                  rotation: -90,
                                  circumference: 180,
                                  cutout: "80%",
                                  maintainAspectRatio: false,
                                  aspectRatio: 1,
                                  responsive: true,
                                  animations: {
                                      animation: {
                                          delay: 500, // wait for 9 seconds before starting the animation
                                          enabled: isChartInView,// duration: 1000,
                                          duration: 1500,

                                      }
                                  }
                              }}
                              style={{opacity: isChartInView ? 1 : 0}}/>
                    <div className={styles.chartTitle}>{info.title}</div>
                    <div className={styles.chartPercentage}>{info.percentage}%</div>
                </div>
            ))}

        </div>
    );
}

export default ChartBar