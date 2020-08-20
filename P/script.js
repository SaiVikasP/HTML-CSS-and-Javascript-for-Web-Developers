function sayHai() {
	this.textContent="Said it!"
	var name =
		document.getElementById("name").value;
	var message="<h2>Hai "+name+"!</h2>"+" Click on message board for new message";

	if (name==="Anna"||name==="anna")
		message="<h3>My sweet sister said,</h3>"+message;
	else if (name==="Preethi") {
		message="<h3>Preethi is gorgrous!</h3>"+message;
	}
	else if (name==="Sai Vikas"||name==="Vikas"||name==="Sai vikas"||name==="Sai")
		message="<h3>He's the creator, gave me life!</h3>"+message;
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
	var msg=document.querySelector("#msg").textContent;
	msg="";
	document
		.querySelector("#msg")
			.textContent=msg;
}
document.querySelector('button > a')
	.addEventListener("click",showLink);