function Bunny (x,y,health,hunger,thirst,age,speed,sightDist)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
}
Bunny.prototype = new Animal();
Bunny.prototype.grassHeur = function (x,y,world)
{
	return world.closestGrassDistance(x,y)* this.get('hunger');
}
Bunny.prototype.wolfHeur = function (x,y,world)
{
	var heursum = 0;
	var inrange = world.scanInRange(this.get('x'),this.get('y'),this.get('sightDist'));
	for(var i=0; i< inrange.length; i++)
	{
		if(inrange[i].type=='wolf')
		{
			heursum += Math.abs(x-inrange[i].get('x')) + Math.abs(y-inrange[i].get('y'));
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
	totalH += this.wolfHeur(x,y,world);
	return totalH;
}
//makes the decison
Bunny.prototype.decide = function (world)
{
	var xArr = [-1,0,1];
	var yArr = [-1,0,1];
	var maximumHeur;
	for (var xc=0; xc<xArr.length; xc++)
	{
		var x = xArr[xc];
		for (var yc=0; yc<yArr.length; yc++)
		{
			var y = yArr[yc];
			var totalHeur = this.totalHeuristic(x,y,world);
			if(totalHeur>maximumHeur[0])
			{
				maximumHeur = [totalHeur,x,y];
			}
		}
	}
	this.set('x',maximumHeur[1]);
	this.set('y',maximumHeur[2]);
	
}
//ages the animal by one, decreases hunger thirst and age + decides
Bunny.prototype.timestep = function(world)
{
	this.decide(world);
	var hungerincrease=2;
	var thirstincrease=2;
	this.set('hunger',this.get('hunger')+hungerloss);
	this.set('thirst',this.get('thirst')+hungerloss);
	this.set('age',this.get('age')+1);
	
}
