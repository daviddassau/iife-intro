var SolarSystem = (function(oldSolarSystem){
	const stars = ["Your Mom", "Shooting", "Twinkle"];

	oldSolarSystem.getStars = function(){
		return stars;
	};

	oldSolarSystem.zapStars = function(){
		stars.pop();
	};

	oldSolarSystem.shifyStars = function(newStar){
		stars.shift();
	};

	return oldSolarSystem;
})(SolarSystem || {});