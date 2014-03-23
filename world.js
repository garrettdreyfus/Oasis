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
		if(Math.abs(animal.x-x) + Math.abs(animal.y-y) <= self.sightDist && self.id != animal.id)
		{
			if(animal.species == 'Bunny')
			{
				inrange.push(new FauxBunny(animal));	
			}
			if(animal.species == 'Wolf')
			{
				inrange.push(new FauxBunny(animal));	
			}
		}
	}
	
	return inrange
}
//Returns distance to closest grass
World.prototype.closestGrassDistance = function (x,y)
{
	var locations = this.water.locations;
	var minimum = 0;
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

	var locations = this.grass.locations;
	var minimum = 0;
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
