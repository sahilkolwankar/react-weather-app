import React from 'react';
import { Bar } from 'react-chartjs-2';

class ViewTemperatures extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const min = Number(this.props.min).toFixed(2);
        const current = Number(this.props.current).toFixed(2);
        const max = Number(this.props.max).toFixed(2);

        const temperatures = [
            min,
            current,
            max
        ];

        const data = {
            labels: [
                `Min - ${min}`, 
                `Current - ${current}`,
                `Max - ${max}`
            ],
            datasets: [
                {
                    label: "Today's temperatures",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: temperatures,
                    fontSize: 40
                }
            ]
        };

        const options = {
            responsive: true,
            legend: { 
                display: false,
            },
            title: {
                display: true,
                text: "Today's temperatues",
                fontSize: 40
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 40
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 40
                    }
                }]
            },
            tooltips: {
                titleFontSize: 40,
                bodyFontSize: 40
            }
        };

        const canvas = {

        };

        return (
            <div>
                <Bar
                    data={data}
                    width={10}
                    height={10}
                    options={options}
                    canvas={canvas}
                />
            </div>
        );
    }
}

export default ViewTemperatures;