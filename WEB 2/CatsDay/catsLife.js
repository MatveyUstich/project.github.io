var hp = 100;
var full = 50;
var mood = 50;
var age = 1;
var timer = 0;

var pFull = document.getElementsByClassName("fullness");
var pHp = document.getElementsByClassName("hp");
var pMood = document.getElementsByClassName("mood");
var pAge = document.getElementsByClassName("age");

function feeding() {	
	full++;	
}

function walking() {
	mood += 3;
	full--;
	hp++;	
}
function heeling() {
	hp += 2;
	mood += 1;
}

function playing() {
	mood += 5;
}
function updateStatus() {
	timer++;
	

	pFull[0].innerText = "Сытость: " + full;
	pHp[0].innerText = "Здоровье: " + hp;
	pMood[0].innerText = "Настроение: " + mood;
	pAge[0].innerText = "Возраст: " + age;
}

//setInterval(func, delay, arg1, arg2);
setInterval(updateStatus, 10);
setInterval(function(){age++;},
	5000);