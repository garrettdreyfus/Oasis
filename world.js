function World (animals,grass,water,width,height)
{
	this.animals = animals;
	this.grass = grass;
	this.water = water;
	this.width = width;
	this.height = height;
}
//Returns all animals within a certain range
World.prototype.scanInRange = function (self)
{
	var inrange = [];
	var animals = this.animals; 
	for(var i=0;i<animals.length;i++)
	{ 
		var animal = animals[i];
		if(Math.abs(animal.x-self.x) + Math.abs(animal.y-self.y) <= self.sightDist )
		{
			if(animal.species == 'Bunny')
			{
				inrange.push(new FauxBunny(animal));	
			}
			if(animal.species == 'Wolf')
			{
				inrange.push(new FauxWolf(animal));	
			}
		}
	}
	
	return inrange
}
World.prototype.adjacentSweep = function (self)
{
	var inrange = [];
	var animals = this.animals; 
	for(var i=0;i<animals.length;i++)
	{ 
		var animal = animals[i];
		if(Math.abs(animal.x-self.x) + Math.abs(animal.y-self.y)<= 10)
		{
			if(animal.species == 'Bunny')
			{
				inrange.push(animal);
			}
		}
	}
	
	return inrange

}
//Returns distance to closest grass
World.prototype.closestGrassDistance = function (x,y)
{
	var locations = this.grass.locations;
	var minimum = Infinity;
	for(var i=0; i<locations.length; i++)
	{
		var dist = Math.abs(locations[i][0]-x)+Math.abs(locations[i][1]-y);
		if(dist<minimum)
		{
			minimum = dist;
		}
	}
	return minimum;
}
//Returns distance to closest water
World.prototype.closestWaterDistance = function (x,y)
{

	var locations = this.water.locations;
	var minimum = Infinity;
	for(var i=0; i<locations.length; i++)
	{
		var dist = Math.abs(locations[i][0]-x)+Math.abs(locations[i][1]-y);
		if(dist<minimum)
		{
			minimum = dist;
		}
	}
	return minimum;
}
