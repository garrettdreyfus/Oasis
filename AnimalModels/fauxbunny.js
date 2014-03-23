function FauxBunny (bunny)
{
	this.species = 'Bunny';
	this.x = bunny.x;
	this.y = bunny.y;
	this.sightDist = bunny.sightDist;
}
FauxBunny.prototype = new Bunny();
Bunny.prototype.totalHeuristic = function (x,y,world)
{
	var totalH;
	totalH += this.wolfHeur(x,y,world.scanInRange(this.x,this.y,this.sightDist));
	return totalH;
}

