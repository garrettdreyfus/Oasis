//Bunny
// x,y
// health , hunger, thirst, age
// speed , sightDist
function cap (num)
{
	if (num>100)
	{
		num=100
	}
	return num
}
function Bunny (x,y,health,hunger,thirst,age,speed,sightDist)
{
	this.x = x;
	this.y = y;
	this.health = health ;
	this.hunger = cap (hunger) ;
	this.thirst = cap (thirst) ;
	this.age = age ;
	this.speed = speed ;
	this.sightDist  = sightDist;
	this.get = function (attr)
	{
		return this[attr];
	}
	this.set = function (attr,value)
	{
		this[attr] = value;
	}
	this.hungerHeur = function ()
	{
	}
	this.thirstHeur = function ()
	{
	}
	this.incAge = function ()
	{
		this.set( 'age',this.get('age')+1);
	}
	this.move = function (xdist,ydist)
	{
		if ( xdist + ydist <= speed )
		{
			this.set( 'x' , this.get('x') + xdist );
			this.set( 'y' , this.get('y') + xdist );
			return true;
		}
		else
		{
			return false;
		}
	}
	return this
}
Bunny.prototype.kind = 'Bunny';







