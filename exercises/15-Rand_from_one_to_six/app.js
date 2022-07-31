function getRandomInt()
{
	var randomNumber = Math.floor(Math.random() * 10);
	if (randomNumber >6) {
		return randomNumber -4}
	else if (randomNumber== 0){
		return randomNumber + 1
	}
	else {return randomNumber}
	
}
console.log(getRandomInt());