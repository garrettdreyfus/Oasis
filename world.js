function World (animals,grass,water,width,height)
{
	this.animals = animals;
	this.grass = grass;
	this.water = water;
	this.width = width;
	this.height = height;
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
	//Returns all animals within a certain range
	this.scanInRange = function (x,y,radius)
	{
		var inrange = [];
		var animals = this.get('animals'); 
		for(var i=0;i<animals.length);i++)
		{ 
			var animal = animals[i];
			if(animal.get('x') + animal.get('y') <= radius)
			{
				inrange.push(animal)	
			}
		}
		return inrange
	}
	//Returns distance to closest grass
	this.closestGrassDistance = function (x,y)
	{
		var locations = this.get('water').get('locations');
		var minimum = 0;
		for(var i=0; i<locations.length; i++)
		{
			var dist = locations[i][0]+locations[i][1];
			if(dist<minimum)
			{
				minimum = dist;
			}
		}
		return minimum
	}
	//Returns distance to closest water
	this.closestWaterDistance = function (x,y)
	{

		var locations = this.get('grass').get('locations');
		var minimum = 0;
		for(var i=0; i<locations.length; i++)
		{
			var dist = locations[i][0]+locations[i][1];
			if(dist<minimum)
			{
				minimum = dist;
			}
		}
		return minimum
	}
	return this;

}
