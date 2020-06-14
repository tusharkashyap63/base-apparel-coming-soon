document.getElementById("submit").addEventListener('click', showAlert);

function showAlert(e) {
	let error = document.createElement("p");
	error.className = "errMessage";
	error.appendChild(document.createTextNode("Please provide a valid Email"));
	let leftSideWritten = document.querySelector(".written");
	leftSideWritten.appendChild(error);
	setTimeout(() => document.querySelector(".errMessage").remove(), 3000);
}