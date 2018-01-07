

var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke(); //tu zle napisalas element zamiast event dlatego nie dzialalo
});
var paragraph = document.getElementById('joke'); //wyswietlenie dowcipu

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send(); //wywolanie funkcji
}

