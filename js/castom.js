"use strict";


let nameInput = document.getElementById('fullName');
let emailInput = document.getElementById('emailAddress');
let passInput = document.getElementById('passeord');
let cPassInput = document.getElementById('cPasseord');
let checkInput = document.getElementById('checkBox');
let btn = document.getElementById('btn');

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


checkInput.addEventListener("input", function() {
	let checkVlu = checkInput.checked;
	if (checkVlu == true) {
		passInput.type = "text";
		cPassInput.type = "text";
	} else {
		passInput.type = "password";
		cPassInput.type = "password";
	}
})

btn.addEventListener("click", function() {

	let nameVlu = nameInput.value;
	let emailVlu = emailInput.value;
	let passVlu = passInput.value;
	let cPassVlu = cPassInput.value;

	if (nameVlu.length < 3) {
		errorInput(nameInput);
	} else {
		okInput(nameInput);
	}

	if (passVlu.length >= 6) {
		okInput(passInput);
	} else {
		errorInput(passInput);
	}

	if (passVlu == cPassVlu) {
		okInput(cPassInput);
	} else {
		errorInput(cPassInput);
	}

	if (emailVlu.match(regExp)) {
		okInput(emailInput);
	} else {
		errorInput(emailInput);
	}
	
})


function errorInput(id) {
	id.style.borderColor = "red";
	let label = id.parentNode;
	let h6 = label.querySelector("h6");
	h6.style.display = "block";
	h6.style.color = "red";
}

function okInput(id) {
	id.style.borderColor = "green";
	let label = id.parentNode;
	let h6 = label.querySelector("h6");
	h6.style.display = "none";
	h6.style.display = "none";
}