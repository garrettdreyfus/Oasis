function World (animals,grass,water,width,height)
{
	this.animals = animals;
	this.grass = grass;
	this.water = water;
	this.width = width;
	this.height = height;
}
//get attribute
World.prototype.get = function (attr)
{
	return this[attr];
}
//set attribute
World.prototype.set = function (attr,value)
{
	this[attr] = value;
}
//Returns all animals within a certain range
World.prototype.scanInRange = function (x,y,radius)
{
	var inrange = [];
	var animals = this.get('animals'); 
	for(var i=0;i<animals.length;i++)
	{ 
		var animal = animals[i];
		if(Math.abs(animal.get('x')-x) + Math.abs(animal.get('y')-y) <= radius)
		{
			inrange.push(animal)	
		}
	}
	return inrange;
}
//Returns distance to closest grass
World.prototype.closestGrassDistance = function (x,y)
{
	var locations = this.get('water').get('locations');
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

	var locations = this.get('grass').get('locations');
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
