//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
	let tempArray = [];
	
	str.split(" ").forEach(word => {
	  if (!(/[!.,?]/).test(word)) {
		tempArray.push(word.slice(1) + word.slice(0, 1) + "ay");
	  }
	  else {
		tempArray.push(word);
	  }
	});
	return tempArray.join(" ");
}