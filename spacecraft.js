var SolarSystem = (function(oldSolarSystem){
	const spacecraft = ["Star Destroyer", "Death Star", "X-Wing", "Tie-Fighter"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	};

	oldSolarSystem.wreckSpacecraft = function(){
		spacecraft.pop(); // pop removes spacecraft from array
	};

	return oldSolarSystem;
})(SolarSystem || {});