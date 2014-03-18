//Bunny
// x,y
// health , hunger, thirst, age
// speed , sightDist
function cap (num)
{
	if (num>100)
	{
		num=100;
	}
	return num;
}
function Bunny (x,y,health,hunger,thirst,age,speed,sightDist)
{
	this.x = x;
	this.y = y;
	this.health = health;
	this.hunger = cap (hunger);
	this.thirst = cap (thirst);
	this.age = age;
	this.speed = speed;
	this.sightDist  = sightDist;
	//get attribute
	this.get = function (attr)
	{
		return this[attr];
	}
	//set attribute
	this.set = function (attr,value)
	{
		this[attr] = value;
	}
	//makes the decison
	this.decide = function (world)
	{
	}
	//move the distance
	this.move = function (xdist,ydist)
	{
		if ( xdist + ydist <= speed )
		{
			this.set('x',this.get('x')+xdist);
			this.set('y',this.get('y')+xdist ;
			return true;
		}
		else
		{
			return false;
		}
	}
	//ages the animal by one, decreades hunger thirst and age + decides
	this.timestep = function(world)
	{
		this.decide(world);
		var hungerloss=2;
		var thirstloss=2;
		this.set('hunger',this.get('hunger')-hungerloss);
		this.set('thirst',this.get('thirst')-hungerloss);
		this.set('age',this.get('age')-1);
		
	}
	return this;
}
Bunny.prototype.kind = 'Bunny';