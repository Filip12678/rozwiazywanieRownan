function dzielenieLiczbOddzielonychZnakiemDzielenia(ulamekDoUproszczenia) {
	
	
	if (ulamekDoUproszczenia.includes('/')) {
		ulamekDoUproszczenia = ulamekDoUproszczenia.split('/');
		return (ulamekDoUproszczenia[0] / ulamekDoUproszczenia[1]);
	}
	
	else {
		return ulamekDoUproszczenia;
	}
	
	
}





function myFunction() {
	
	
	//var x4 = nerdamer.solve('x^6+41*x^5+652*x^4+5102*x^3+20581*x^2+40361*x+30030', 'x');
	//console.log(x4.toString());
	
	
	
	
	var st10 = parseFloat(document.getElementById('10').value);
	var st9 = parseFloat(document.getElementById('9').value);
	var st8 = parseFloat(document.getElementById('8').value);
	var st7 = parseFloat(document.getElementById('7').value);
	var st6 = parseFloat(document.getElementById('6').value);
	var st5 = parseFloat(document.getElementById('5').value);
	var st4 = parseFloat(document.getElementById('4').value);
	var st3 = parseFloat(document.getElementById('3').value);
	var st2 = parseFloat(document.getElementById('2').value);
	var st1 = parseFloat(document.getElementById('1').value);
	var st0 = parseFloat(document.getElementById('0').value);
	
	
	
	var x4 = nerdamer.solve(`${st10}x^10 + ${st9}x^9 + ${st8}x^8 + ${st7}x^7 + ${st6}x^6 + ${st5}x^5 + ${st4}x^4 + ${st3}x^3 + ${st2}x^2 + ${st1}x + ${st0}`, 'x');
	
	var rozwiazania = x4.toString();
	rozwiazania = rozwiazania.substring(1);
	rozwiazania = rozwiazania.slice(0, -1);
	rozwiazania = rozwiazania.split(',');
	
	iloscRozwiazan = rozwiazania.length;
	
	var rozwiazania_W_CiaguZankow = "Rozwiązania równania:<br>";
	
	for (i = 0; i < iloscRozwiazan; i++) {
		
		rozwiazania_W_CiaguZankow = rozwiazania_W_CiaguZankow + "<br>" + dzielenieLiczbOddzielonychZnakiemDzielenia(rozwiazania[i])
		
	}
		
	console.log(rozwiazania);
	
	document.getElementById("rozwiazania").innerHTML = rozwiazania_W_CiaguZankow;
	
	
}