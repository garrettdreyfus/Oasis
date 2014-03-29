id =0;
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
	this.uniqueId = id+=1;
}
//move the distance
Animal.prototype.move = function (xdist,ydist)
{
	this.x += xdist*this.speed;
	this.y += ydist*this.speed;
}
//returns Water Heuristic 
Animal.prototype.waterHeur = function (x,y,world)
{
	return 0;//(1/world.closestWaterDistance(x,y)) * this.thirst *1000;
}
Animal.prototype.decide = function (world)
{
	var movements = [[1,1],[1,0],[1,-1],[0,1],[0,-1],[0,0],[-1,1],[-1,0],[-1,-1]];
	var maximumHeur = [0,0,0];
	for (var movement=0; movement<movements.length; movement++)
	{
		var x = movements[movement][0];
		var y = movements[movement][1];
		var totalHeur = this.totalHeuristic(this.x+x,this.y+y,world);
		if(totalHeur>maximumHeur[0])
		{
			maximumHeur = [totalHeur,x,y];
		}
	}
	this.move(maximumHeur[1], maximumHeur[2]);
	
}

Animal.prototype.isdead = function()
{
	return this.thirst >100 || 
		this.hunger>100 ||
		this.health<1
}
