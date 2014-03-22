function Wolf (x,y,health,hunger,thirst,age,speed,sightDist,thirst)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.attack = attack;
}
Wolf.prototype = new Animal();
//get attribute
Wolf.protype.get = function (attr)
{
	return this[attr];
}
//set attribute
Wolf.protype.set = function (attr,value)
{
	this[attr] = value;
}
//returns Water Heuristic 
Wolf.protype.move = function (xdist,ydist)
{
	if ( xdist + ydist <= speed )
	{
		this.set('x',this.get('x')+xdist);
		this.set('y',this.get('y')+xdist) ;
		return true;
	}
	else
	{
		return false;
	}
}
Wolf.protype.waterHeur = function (x,y,world)
{
	return world.closestWaterDistance(x,y) * this.get('thirst');
}
Wolf.protype.decide = function (world)
{

}
Wolf.protype.timestep = function(world)
{
	this.decide(world);
	var hungerincrease=2;
	var thirstincrease=2;
	this.set('hunger',this.get('hunger')+hungerloss);
	this.set('thirst',this.get('thirst')+hungerloss);
	this.set('age',this.get('age')+1);
	
}


