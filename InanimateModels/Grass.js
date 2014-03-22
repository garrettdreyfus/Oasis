function Grass (locations)
{
	this.locations = locations;
}

Grass.prototype.get = function (attr)
{
	return this[attr];
}

Grass.prototype.set = function (attr,value)
{
	this[attr] = value;
}
