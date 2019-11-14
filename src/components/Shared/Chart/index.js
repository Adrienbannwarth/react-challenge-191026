import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

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

const dataBar = {
	labels: [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	],
	datasets: [{
		data: [80, 60, 70, 30, 25, 70],
		backgroundColor: [
		'#03CEA4',
		'#03CEA4',
		'#EAC435',
		'#EAC435',
		'#FF4242',
		'#FF4242'
		],
		hoverBackgroundColor: [
		'#03CEA4',
		'#03CEA4',
		'#EAC435',
		'#EAC435',
		'#FF4242',
		'#FF4242'
		]
	}]
};

const Chart = ({type}) => type === "pie" ? (
	<Pie
		data={data}
		width={160}
		height={160}
		options={{ 
			maintainAspectRatio: false,
			legend: {
				display: false,
			}
		}}
	/>
) : (
	<Bar
		data={dataBar}
		width={160}
		height={160}
		options={{ 
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					gridLines: {
						display:false
					}
				}],
				yAxes: [{
					gridLines: {
						display:false
					},
					ticks: {
						display: false
					}
				}]
			}
		}}
	/>
);

export default Chart
