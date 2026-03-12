let table;
let csvLength;
let Xpot;
let Ypot;
let NodeColour;
let currentRow;
let NodeInfo = "";
let myFont;

//------------------------------------------------------------------------- xx

async function setup() {
table = await loadTable('/data/data.csv', ',', 'header');

//FIND LENGTH OF DATA
csvLength = table.rows.length

createCanvas(windowWidth, windowHeight, WEBGL);
colorMode(HSL);
myFont = await loadFont('NeueMontreal-Medium.otf')
}

//------------------------------------------------------------------------- xx

function draw() {
    
colorMode(HSL);    
background(51); 
text (mouseX + '  ,  ' + mouseY, mouseX-(windowWidth/2), mouseY-(windowHeight/2))


//DRAW GRAPH
noStroke();
fill('white');
rect(0-windowWidth, 0, windowWidth*2, 5);
rect(0, 0-windowHeight, 5, windowHeight*2);

// TEST ALLIGNMENT HERE
fill("red");
rect(-(windowWidth/2), (windowHeight-100)/2, 50, 50);//BL
rect((windowWidth/2)-50, (windowHeight-100)/2, 50, 50) //BR
rect(-(windowWidth/2), -(windowHeight/2), 50, 50); //TL
rect((windowWidth/2)-50, -(windowHeight/2), 50, 50) //TR


//------------------------------------------------------------------------- xx

//COUNT THROUGH ROWS
for (let currentRow=0; currentRow < csvLength; currentRow++){
    
    //FIND AND ISOLATE HSL
    let HSLValues = table.rows[currentRow].arr[2];
    let HSLSplit = HSLValues.split(' ');
    let SatVal = HSLSplit[1];

    //MAP SAT VAL TO FIND VALUE FOR SCALE
    let MappedSatVal = map(SatVal, 0, 100, 0, 1);
    //MAP AGAIN TO SCREEN SIZE AND SET FINAL VALUE AS XPOT
    Xpot = map(MappedSatVal, 0, 1, -(windowWidth/2), (windowWidth/2)-50);

    //MAP AFFORDABILITY SCORE TO SCREEN SIZE
    Ypot = map(table.rows[currentRow].arr[1], 1, 0, -(windowHeight/2), (windowHeight-100)/2);
    console.log (Ypot)

    //SET NODE COLOUR AS HSL VALUES
    NodeColour = color(int(HSLSplit[0]), int(HSLSplit[1]), int(HSLSplit[2]));
    fill (NodeColour);

    //DRAW NODES
    rect(Xpot, Ypot, 50, 50);

    //------------------------------------------------------------------------- xx


    //WRITE CAPTION TEXT BY FINDING VALUES FORM DATA
    fill("white");
    textSize(10)
    textFont(myFont);
    text(table.rows[currentRow].arr, Xpot-50, Ypot-50)
    text("X: " + Xpot + " Y: " + Ypot, Xpot - 50, Ypot-10)

}

}
