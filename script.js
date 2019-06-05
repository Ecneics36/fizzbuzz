var target = document.getElementById('main');

for (var i = 1; i <= 100; i++) {
	var thomas = document.createElement('div');
	thomas.classList.add('circle');
	if (i % 15 === 0) {
		thomas.classList.add('fizzbuzz');
		thomas.innerText = 'fizzbuzz';
		target.appendChild(thomas);
	} else if (i % 3 === 0) {
		thomas.classList.add('fizz');
		thomas.innerText = 'fizz';
		target.appendChild(thomas);
	} else if (i % 5 === 0) {
		thomas.classList.add('buzz');
		thomas.innerText = 'buzz';
		target.appendChild(thomas);
	} else {
		thomas.innerText = i;
		target.appendChild(thomas);
	}
}