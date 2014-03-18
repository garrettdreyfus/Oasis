function Water (locations)
{
	this.locations = locations;

	this.get = function (attr)
	{
		return this[attr];
	}

	this.set = function (attr,value)
	{
		this[attr] = value;
	}


	return this;
}
