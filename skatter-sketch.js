// Basic Scatter Plot Example (manual dataset)
const MANUAL_DATA = [
	{ label: 'A', value: 12, x: 0.3, y: 0.9, color: '1'},
	{ label: 'B', value: 25, x: 0.4, y: 0.6, color: '1'},
	{ label: 'C', value: 8,  x: 0.8, y: 0.1, color: '1'},
	{ label: 'D', value: 19, x: 0.9, y: 0.2, color: '1'},
	{ label: 'E', value: 31, x: 0.5, y: 0.7, color: '1'}
];  

function setup() {
	createCanvas(800, 450);
}

function draw() {
	background(255);
	scatter(MANUAL_DATA, {
		x: 'x',
		y: 'y',
		title: 'Basic Scatter Plot Example',
		subtitle: 'This is a simple interactive scatter plot using example data.',
    color: 'color',
		palette: ['#3498db', '#e74c3c', '#f39c12'],
    xLabel: 'Saturation',
		yLabel: 'Affordability',
        tooltipColumns: [
		  {col: 'label', label: 'Label'},
		  {col: 'value', label: 'Value'}
		]
	});
}