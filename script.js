function stringChop(str, size) {
  // your code here
	if (str === null || str === "") {
		return [];
	}

	let chunk = Number(size)
	let result = [];
	
	for(let i=0;i<str.length;i+=chunk){
	
		result.push(str.slice(i, i+chunk));
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
