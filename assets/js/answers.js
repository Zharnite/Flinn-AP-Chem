
var unit = function(unitNum) {
	var div = document.getElementById("addHere_" + unitNum);
	div.innerHTML = "";
	var num = 110;
	var part1Link = "https://www.flinnprep.com/Content/AP_Chemistry_Prep_Course/";
	var part2Link =  "/Assets/Images/AnswerImages/question";
	var topicTitle = "";
	if(unitNum == 1) {
		topicTitle = "Nomenclature";
	}
	else if(unitNum == 2) {
		topicTitle = "Atomic_Structure_and_the_Periodic_Table";
	}
	else if(unitNum == 3) {
		topicTitle = "Chemical_Reactions";
	}
	else if(unitNum == 4) {
		topicTitle = "Bonding_Basics";
	}
	else if(unitNum == 5) {
		topicTitle = "Structure_and_Properties";
	}
	else if(unitNum == 6) {
		topicTitle = "Stoichiometry";
	}
	else if(unitNum == 7) {
		topicTitle = "Gases";
	}
	else if(unitNum == 8) {
		topicTitle = "Solutions";
	}
	else if(unitNum == 9) {
		topicTitle = "Acids_and_Bases";
	}
	else if(unitNum == 10) {
		topicTitle = "Critical_THinking_in_AP_Chemistry";
	}
	else if(unitNum == 11) {
		topicTitle = "Thermochemistry";
	}
	else if(unitNum == 12) {
		topicTitle = "Equilibrium";
	}
	else if(unitNum == 13) {
		topicTitle = "Kinetics";
	}
	else if(unitNum == 14) {
		topicTitle = "Electrochemistry";
	}
	else if(unitNum == 15) {
		topicTitle = "Photoelectron_Spectroscopy";
	}
	else {
		topicTitle = "";
	}
	
	for(var i = 1; i < num; i++) {
		var img = document.createElement("img");
		theLink = part1Link + topicTitle + part2Link + i + ".png";
		img.src = theLink;
		div.appendChild(img);
	}
}

function clearBox(classID) {
	var clear = document.getElementsByClassName(classID);
	for(var i = 0; i < clear.length; i++) {
		clear[i].innerHTML = "";	
	}
}

