function Animal (x,y,health,hunger,thirst,age,speed,sightDist)
{
	this.x = x;
	this.y = y;
	this.health = health;
	this.hunger = hunger;
	this.thirst = thirst;
	this.age = age;
	this.speed = speed;
	this.sightDist = sightDist;
	this.type = 'bunny';
}
Animal.prototype.get = function (attr)
{
	return this[attr];
}
//set attribute
Animal.prototype.set = function (attr,value)
{
	this[attr] = value;
}
//move the distance
Animal.prototype.move = function (xdist,ydist)
{
	if ( xdist + ydist <= speed ) // check to make sure this is what you want
	{
		this.set('x',this.get('x')+xdist);
		this.set('y',this.get('y')+xdist);
		return true;
	}
	else
	{
		return false;
	}
}
//returns Water Heuristic 
Animal.prototype.waterHeur = function (x,y,world)
{
	return world.closestWaterDistance(x,y) * this.get('thirst');
}

