var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

$(document).ready(function(){
	$("form#numbers").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#num1").val());
	  var number2 = parseInt($("#num2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		var result;
		if (operator === "add") {
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
	});
});
