//setting up the game by setting the number of contestants,
//setting the number of skips then,
//looping and creating an array with the number of contestants
const n = 9 //number of contestants
const r = 1 //contestant place to remove; 1 means one over, 2 means two over, etc
var arr = []
for(i = 1; i <= n; i++){
	arr.push(i)
}

remove(arr,r)

//this function start at index 0 and will skip s index and
//remove the index it lands on
function remove(arr,r){
	//loop through and remove a contestant with .splice()
	for(i=0; i<=arr.length; i++){
		arr.splice(i+r,1)  //remove location is the index plus the location to remove the contestant
	}
	console.log(arr)

}
