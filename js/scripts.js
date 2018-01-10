$(document).ready(function(){

	var add = function(number1, number2) {
		return number1 + number2;
	}

	var number3 = parseInt(prompt("Type first number"));
	var number4 = parseInt(prompt("Type second number"));

	alert(add(number3, number4));

});
