function Wolf (x,y,health,hunger,thirst,age,speed,sightDist,thirst)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.attack = attack;
}
Wolf.prototype = new Animal();
//returns Water Heuristic 
Wolf.prototype.waterHeur = function (x,y,world)
{
	return world.closestWaterDistance(x,y) * this.thirst;
}
Wolf.prototype.decide = function (world)
{

}
Wolf.prototype.timestep = function(world)
{
	this.decide(world);
	var hungerincrease=2;
	var thirstincrease=2;
	this.hunger += hungerincrease;
	this.thirst += thirstincrease;
	this.age+=1;
}


