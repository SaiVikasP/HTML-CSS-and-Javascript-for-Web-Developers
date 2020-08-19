function sayHai() {
	var name =
		document.getElementById("name").value;
		var message="<h2>Hai "+name+"!</h2>";
	document
		.getElementById("output")
		.innerHTML=message;
}

function showLink() {
	var link=
		"<div>Welcome to</div>"+
		"<div>Sastra deemed university on Coursera</div>"+
		"<div>Start learning on Coursera!</div>"
	document
		.getElementById("output2")
		.innerHTML=link;
}