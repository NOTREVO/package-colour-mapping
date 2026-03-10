let table;
let csvLength;
let Xpot;
let Ypot;
let NodeColour;
let currentRow;
let storedXPots = [];
let stroedYPots = [];
let NodeInfo = "";

async function setup() {
table = await loadTable('/data/data-test.csv', ',', 'header');
csvLength = table.rows.length
createCanvas(windowWidth, windowHeight);
}

function draw() {
background(51); 

noStroke();
fill('white');
rect(windowWidth/2-windowWidth/2, windowHeight/2, windowWidth, 5);
rect(windowWidth/2, windowHeight/2-windowHeight/2, 5, windowHeight)

currentRow = 2;

for (let currentRow=0; currentRow < csvLength; currentRow++){
    Xpot = map(table.rows[currentRow].arr[3], 0, 1, 0, windowWidth);
    console.log(table.rows[currentRow].arr)
    Ypot = map(table.rows[currentRow].arr[1], 1, 0, 0, windowHeight);
    NodeColour = table.rows[currentRow].arr[2];
    fill(NodeColour);
    rect(Xpot, Ypot, 50, 50);
    fill("white");
    textSize(10)
    text(table.rows[currentRow].arr, Xpot-50, Ypot-50)
    text("X: " + Xpot + " Y: " + Ypot, Xpot - 50, Ypot-10)
    storedXPots.push(Xpot);
    stroedYPots.push(Ypot);
}

if (storedXPots.length === 4){
    storedXPots = [];
}

if (stroedYPots.length === 4){
    stroedYPots = [];
}

}
