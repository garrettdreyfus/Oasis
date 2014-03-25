function Bunny (x,y,health,hunger,thirst,age,speed,sightDist)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.species = 'Bunny';
}
Bunny.prototype = new Animal();
Bunny.prototype.grassHeur = function (x,y,world)
{
	return (1/world.closestWaterDistance(x,y)) * this.thirst *1000;
}
Bunny.prototype.wolfHeur = function (x,y,animals)
{
	var heursum = 0;
	for(var i=0; i< animals.length; i++)
	{
		if(animals[i].species=='Wolf')
		{
			heursum += Math.abs(x-animals[i].x) + Math.abs(y-animals[i].y);
		}
	}
	if(heursum != 0)
	{
		return (1/heursum)*-500000000000000000000000000;
	}
	else{
		return 0;	
	}
}
//total heuristic
Bunny.prototype.totalHeuristic = function (x,y,world)
{
	var totalH=0;
	totalH += this.waterHeur(x,y,world);
	totalH += this.grassHeur(x,y,world);
	totalH += this.wolfHeur(x,y,world.scanInRange(this));
	return totalH;
}
//makes the decison
//ages the animal by one, decreases hunger thirst and age + decides
Bunny.prototype.timestep = function(world)
{
	this.decide(world);
	var hungerincrease=2;
	var thirstincrease=2;
	this.hunger += hungerincrease;
	this.thirst += thirstincrease;
	this.age += 1;
	
}
