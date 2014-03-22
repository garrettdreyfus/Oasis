function Water (locations)
{
	this.locations = locations;
}
Water.prototype.get = function (attr)
{
	return this[attr];
}

Water.prototype.set = function (attr,value)
{
	this[attr] = value;
}
