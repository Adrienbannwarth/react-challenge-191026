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
		'#FF4242',
		'#7765E3',
		'#EAC435'
		],
		hoverBackgroundColor: [
		'#FF4242',
		'#7765E3',
		'#EAC435'
		]
	}]
};

const Chart = () => (
    <div>
        <h2>Pie Example</h2>
        <Pie
			data={data}
			width={200}
			height={200}
			options={{ maintainAspectRatio: false }}
		/>
    </div>
)

export default Chart
