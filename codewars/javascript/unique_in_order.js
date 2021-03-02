//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
	var retArray = [];
	
	for (let i = 0; i < iterable.length; i++) {
	  if (iterable[i] != retArray.slice(-1))
		retArray.push(iterable[i]);
	}
	return retArray;
}