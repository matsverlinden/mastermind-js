var colors = ['red', 'blue', 'green', 'yellow', 'white', 'black'];
var row = 0;
var puzzle = [];
var knop = document.getElementById('knop')
function start(){
	for(i = 0; i < colors.length; i++){
		colorKnop = document.createElement("button");
		colorKnop.id = i;
		colorKnop.setAttribute("onclick","setColor(event)");

		colorKnop.style.backgroundColor = colors[i];
		document.getElementById('bottom').appendChild(colorKnop);

	}
	createButtons();
	setPuzzle();
}

function setPuzzle(){
	for(i = 0; i < 4; i++){
		puzzle.push(colors[Math.floor(Math.random() * colors.length)])
	}
	console.log(puzzle);
}

function createButtons(){
	row++;
	for(i = 0; i < 4; i++){
		targetKnop = document.createElement('button');
		targetKnop.id = row + '_' + i;
		targetKnop.setAttribute('onclick', 'putColor(event)');
		document.getElementById('game').appendChild(targetKnop);
	}
	for(a = 0; a < 4; a++){
		targetKnop = document.createElement('button');
		targetKnop.id = row + '_' + a;
		
		document.getElementById('rood').appendChild(targetKnop);
	}
}

function setColor(event){
	//console.log(event);
	x = event.target.style.backgroundColor;
	//return x;
	console.log(x);
}

function putColor(event){
	event.target.style.backgroundColor = x;
 }
