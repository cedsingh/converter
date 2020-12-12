function convertTo() {
	var value = document.getElementById('convertBox').value;
	var option = document.getElementById('degFa').value;
	var res = degFa(value, option);
	document.getElementById('convertBox').value = isNaN(res)? "": res;
	return false;
}

function degFa(value, option) {
	value = parseFloat(value);
	switch (option) {
		case "C":
			return (value - 32)*(5/9);
		default:
			return ((9/5)*value)+32;
	}
}