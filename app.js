/*This is a program to find the last person standing for a given number of people
standing in a circle when the first person kills the second person and gives the
sword to the third person and so on until only one remains.
*/

//setting up the game by setting the number of contestants,
//setting the number of places to move then,
//looping and creating an array with the number of contestants
var n = 1 //number of contestants
const r = 1 //contestant place to remove; 1 means one over, 2 means two over, etc
var numInput = document.querySelector('input[type="number"]')
var output = document.getElementById('output')
var btn = document.getElementById('data')
var arr = []
for(i = 1; i <= n; i++){
	arr.push(i)
}

btn.addEventListener('click', function(){
	gameStart(arr,r)
})

numInput.addEventListener('input', function(){  //may use 'input' depending on behavior
	//change the value of n to the value entered in numInput
	n = numInput.value
	console.log(n)
	arr = []
	for(i = 1; i <= n; i++){
		arr.push(i)
	}
	console.log(arr)
})

function gameStart(arr,r){
	if(arr.length !== 1){ //check if there is a winner, if not remove contestants
		if(arr.length % 2 == 1){ //check if the last index will have the sword or be removed:
			remove(arr)					//if it is odd the last index has the sword and will need to be
			last2First(arr)				//moved to the front *after* the removal of contestants
		} else {						//otherwise do not move to the front of the array
			remove(arr)					//and proceed with removal
		}
		gameStart(arr,r) //starts the elimation all over again with the new array
	} else {
		output.textContent = arr + " is the winner!"
	}
}

//loop through array and remove a contestant with .splice()
function remove(arr){
	for(i=0; i<=arr.length; i++){
		arr.splice(i+r,1)  //remove location is the index plus the location to remove the 1 contestant
	}
}

//function to move last index to the front to create a circular game
function last2First(arr){
	var ele = arr.pop()
	arr.unshift(ele)
}
