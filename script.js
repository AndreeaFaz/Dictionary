let arrayList = new Array();
let len = 0;

function addWordToArray(word) {
	arrayList[len] = word;
	len++;
}
function addWordToList() {
	let inputWord = document.getElementById("inputWord").value;
	if (inputWord == "") {
		alert("You must right something!")
	} else {
		let li = document.createElement("li");
		let text = document.createTextNode(inputWord);
  		li.appendChild(text);
		document.getElementById("list").appendChild(li);
		addWordToArray(inputWord);
	}
	document.getElementById("inputWord").value = "";
}


function checkedWord() {
	let word = document.getElementById("findWord").value;
	let message = document.getElementById("result");
	if (arrayList.includes(word)) {
		message.innerHTML = "Word found!"
	} else {
		message.innerHTML = "Word not found!";
	}
	document.getElementById("findWord").value = "";
}
