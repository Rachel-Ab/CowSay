const cowsay = require("cowsay");
const myCampus = require('./information.js');


console.log(cowsay.say({
	text : myCampus(),
	e : "oO",
	T : "U "
}));