import React from 'react'
import styles from '@/pages/ChartBar/ChartBar.module.css'
import useChartData from "@/hooks/useChartData";
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from "chart.js";
import {crypto} from "next/dist/compiled/@edge-runtime/primitives/crypto";

Chart.register(ArcElement);

function ChartBar() {
    const charData = [
        {id: crypto.randomUUID(), percentage: 80, color: '#7DA336', title: 'Communication'},
        {id: crypto.randomUUID(), percentage: 95, color: '#326211', title: 'Problem Solving'},
        {id: crypto.randomUUID(), percentage: 99, color: '#326211', title: 'Collaboration'},
        {id: crypto.randomUUID(), percentage: 78, color: '#7DA336', title: 'Time Management'},
        {id: crypto.randomUUID(), percentage: 90, color: '#7DA336', title: 'Attention to detail'}
    ]
    const chartRef = React.useRef();
    const [isChartInView, setIsChartInView] = React.useState(false);
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsChartInView(entry.isIntersecting);
        }, { threshold: 0.00001 });

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
        <div ref={chartRef} className={styles.chartContainer}>
            {charData.map((info) => (
                <div className={styles.chart} key={info.id}>
                    <Doughnut
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
                            maintainAspectRatio: true,
                            responsive: true,
                            animations: {
                                animation: {
                                    delay: 3000, // wait for 9 seconds before starting the animation
                                    enabled: isChartInView,// duration: 1000,
                                    // easing: 'linear',
                                    // from: 1,
                                    // to: 0,
                                    // loop: true
                                }
                            }




                        }}
                        style={{ display: isChartInView ? 'block' : 'none' }}/>
                    <div className={styles.chartTitle}>{info.title}</div>
                    <div className={styles.chartPercentage}>{info.percentage}%</div>
                </div>
            ))}

        </div>
    );
}

export default ChartBar