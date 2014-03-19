function Wolf (x,y,health,hunger,thirst,age,speed,sightDist,attack)
{
	this.x = x;
	this.y = y;
	this.health = health;
	this.hunger = hunger;
	this.thirst = thirst;
	this.age = age;
	this.speed = speed;
	this.sightDist  = sightDist;
	this.attack  = attack;
	this.type='wolf';
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
	//returns Water Heuristic 
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
	this.waterHeur = function (x,y,world)
	{
		return world.closestWaterDistance(x,y) * this.get('thirst');
	}
	this.decide = function (world)
	{
	
	}
	this.timestep = function(world)
	{
		this.decide(world);
		var hungerincrease=2;
		var thirstincrease=2;
		this.set('hunger',this.get('hunger')+hungerloss);
		this.set('thirst',this.get('thirst')+hungerloss);
		this.set('age',this.get('age')+1);
		
	}
	return this
}


