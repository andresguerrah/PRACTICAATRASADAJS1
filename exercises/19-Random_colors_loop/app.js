function getRandom(max, min) {
	return Math.floor(Math.random()*(max-min+1)+min)
	
}


function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	for (let index = 0; index <10; index++) {

		var exampleColor = getColor(getRandom(4,1));

		console.log(exampleColor)

		
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

