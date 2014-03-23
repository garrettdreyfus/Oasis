function Bunny (x,y,health,hunger,thirst,age,speed,sightDist)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.species = 'Bunny';
}
Bunny.prototype = new Animal();
Bunny.prototype.grassHeur = function (x,y,world)
{
	return world.closestGrassDistance(x,y)* this.hunger;
}
Bunny.prototype.wolfHeur = function (x,y,animals)
{
	var heursum = 0;
	for(var i=0; i< animals.length; i++)
	{
		if(animals[i].type=='Wolf')
		{
			heursum += Math.abs(x-animals[i].x) + Math.abs(y-animals[i].y);
		}
	}
	if(heursum != 0)
	{
		return (1/heursum)*-50000;
	}
	else{
		return 0;	
	}
}
//total heuristic
Bunny.prototype.totalHeuristic = function (x,y,world)
{
	var totalH;
	totalH += this.waterHeur(x,y,world);
	totalH += this.grassHeur(x,y,world);
	totalH += this.wolfHeur(x,y,world.scanInRange(this.x,this.y,this.sightDist));
	return totalH;
}
//makes the decison
//ages the animal by one, decreases hunger thirst and age + decides
Bunny.prototype.timestep = function(world)
{
	this.decide(world);
	var hungerincrease=2;
	var thirstincrease=2;
	this.hunger = this.hunger+hungerloss;
	this.thirst += this.thirst+hungerloss;
	this.age += 1;
	
}
