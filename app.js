var generateRndNum= function(name)
	{
		min = Math.ceil(6);
		max = Math.floor(15);
		var randomNum= Math.floor(Math.random() * (max - min)) + min;
		document.getElementById("name").innerHTML = name+randomNum;
		return name+randomNum;
	}