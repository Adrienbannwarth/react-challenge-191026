import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
	labels: [
		'Developer front',
		'Developer back',
		'Designer'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
    }],
    hoverBorderWidth: "200px"
};

const Chart = () => (
    <div>
        <h2>Pie Example</h2>
        <Pie data={data} hoverBorderWidth={"200px"} />
    </div>
)

export default Chart
