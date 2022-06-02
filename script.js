// Get HTMl
var acslTime = document.getElementById("acsl");
var annaTime = document.getElementById("anna");
var apasTime = document.getElementById("apas");
var apushTime = document.getElementById("apush");
var bolivarTime = document.getElementById("bolivar");
var csTime = document.getElementById("cs");
var driversTime = document.getElementById("drivers");
var langTime = document.getElementById("lang");
var summerReadsTime = document.getElementById("summerReads");
var usTime = document.getElementById("us");
var webTime = document.getElementById("web");

// Get Due Dates
var acslDate = new Date("Aug 16, 2022 00:00:00").getTime();
var annaDate = new Date("Jun 14, 2022 00:00:00").getTime();
var apasDate = new Date("Jul 1, 2022 00:00:00").getTime();
var apushDate = new Date("Jul 28, 2022 00:00:00").getTime();
var bolivarDate = new Date("Jun 22, 2022 00:00:00").getTime();
var csDate = new Date("Jun 17, 2022 00:00:00").getTime();
var driversDate = new Date("Jun 8, 2022 00:00:00").getTime();
var langDate = new Date("Jul 6, 2022 00:00:00").getTime();
var summerReadsDate = new Date("Aug 16, 2022 00:00:00").getTime();
var usDate = new Date("Jul 26, 2022 00:00:00").getTime();
var webDate = new Date("Jul 24, 2022 00:00:00").getTime();

var countDown = setInterval(function() {
	
	// Date calculations
	var now = new Date().getTime();
	
	var distance0 = acslDate - now;
	var distance1 = annaDate - now;
	var distance2 = csDate - now;
	var distance3 = bolivarDate - now;
	var distance4 = usDate - now;
	var distance5 = apasDate - now;
	var distance6 = langDate - now;
	var distance7 = apushDate - now;
	var distance8 = summerReadsDate - now;
	var distance9 = webDate - now;
	var distance10 = driversDate - now;
	
	createCountDown(acslTime, distance0);
	createCountDown(annaTime, distance1);
	createCountDown(csTime, distance2);
	createCountDown(bolivarTime, distance3);
	createCountDown(usTime, distance4);
	createCountDown(apasTime, distance5);
	createCountDown(langTime, distance6);
	createCountDown(apushTime, distance7);
	createCountDown(summerReadsTime, distance8);
	createCountDown(webTime, distance9);
	createCountDown(driversTime, distance10);
	
	
	// Every day has the same time leading up to it, make a universal timer for the time until each day. 
	// Distance0 works just fine, it doesn't really matter what distance is inputed
	var hours = findHours(distance0).toString();
  	var minutes = findMinutes(distance0).toString();
  	var seconds = findSeconds(distance0).toString();
	
	if(hours < 10) {
		hours = "0" + hours;
	}
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	
	document.getElementById("nextDay").innerHTML = hours + ":" + minutes + ":" + seconds;

});

function findDays(distance) {
	return Math.floor(distance / (1000 * 60 * 60 * 24));
};

function findHours(distance) {
	return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
};

function findMinutes(distance) {
	return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));;
};

function findSeconds(distance) {
	return Math.floor((distance % (1000 * 60)) / 1000);
};

function createCountDown(element, distance) {
	
	// Time calculation
	
 	var days = findDays(distance).toString();
	
	// Add zero in 10s place if number is below 10
	if(days < 10) {
		days = "0" + days;
	}
	
	// Display results
	element.innerHTML = days;
	
	// Assign corresponding color
	days = Number(days);
	if(days >= 20) {
		element.style.background = "#90ee90";
	} else if(days >= 10) {
		element.style.background = "#ffffe0";
	} else if(days < 10) {
		element.style.background = "#ff0000";
	};
};
