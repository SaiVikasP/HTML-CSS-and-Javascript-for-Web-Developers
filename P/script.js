function sayHai() {
	this.textContent="Said it!"
	var name =
		document.getElementById("name").value;
		var message="<h2>Hai "+name+"!</h2>"+" Click on message board for new message";
	document
		.getElementById("output")
		.innerHTML=message;
}

document.querySelector('button')
	.addEventListener("click",sayHai);

function showLink() {
	this.textContent="Click on the Course!"
	var link=
		"<div>Welcome to</div>"+
		"<div>Sastra deemed university on Coursera</div>"+
		"<div>Start learning on Coursera!</div>"
	document
		.getElementById("output2")
		.innerHTML=link;
}
document.querySelector('button > a')
	.addEventListener("click",showLink);