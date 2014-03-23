function Wolf (x,y,health,hunger,thirst,age,speed,sightDist,thirst,attack)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.attack = attack;
	this.knownLocations = [];
	this.species = 'Wolf';
}
Wolf.prototype = new Animal();
//returns Water Heuristic 
Wolf.prototype.waterHeur = function (x,y,world)
{
	return world.closestWaterDistance(x,y) * this.thirst;
}
Wolf.prototype.huntHeur = function(x,y)
{
	var maximum;
	var knownLocations = this.knownLocations;
	for(var i=0; i<knownLocations.length;i++)
	{
		var total = (Math.abs( x-knownLocations[i].x ) + Math.abs( y-knownLocations[i].y )) / (i+1) ;
		if( total>maximum )
		{
			maximum = total;
		}
	}
	return maximum
}

Wolf.prototype.catalogueBunnyLocations = function(animals)
{
	var animals = animals.filter(function (el) {return el.id == 'Bunny' });
	for(var i=0;i<animals.length;i++)
	{
		this.knownLocations.push([animals[i].x,animals[i].y]);
	}
}
//A wolf=s one dimensional mental model of a bunny 
Wolf.prototype.combatHeur = function(animals)
{
	this.catalogueBunnyLocations(animals);
	var maximum =0;
	for(var step=0;step<5;step++)
	{
		for(var animal=0; animal<animals.length; animal ++)
		{
			animals[animal].decide();
		}
	}
	for(var animal=0; animal<animals.length; animal++)
	{
		if(animals[animal].id=this.id)
		{
			var minimum=0;
			for(var i=0;i<animals.length;i++)
			{
				if(animals[i].species =='Bunny')
				{
					var mandist = Math.abs(animals[i].x - animals[animal].x) + Math.abs(animals[i].y - animals[animal].y);
					if(mandist<minimum){
						minimum=mandist;
					}
				}
			}
			return 1/(minimum) * 10000;
		}
	}
}
Wolf.prototype.totalHeuristic = function (x,y,world)
{
	var total;
	total += this.combatHeur(world.scanInRange(this).push(JSON.parse(JSON.stringify(this))));
	total += this.huntHeur(x,y);
	total += this.waterHeur(x,y,world);
	return total;
}
Wolf.prototype.timestep = function(world)
{
	this.decide(world);
	var hungerIncrease=2;
	var thirstIncrease=2;
	this.hunger += hungerIncrease;
	this.thirst += thirstIncrease;
	this.age+=1;
}

