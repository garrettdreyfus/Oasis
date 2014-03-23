function FauxWolf (wolf)
{
	this.x = wolf.x;
	this.y = wolf.y;
	this.sightDist = wolf.sightDist;
	this.knownLocations = [];
	this.species = 'Wolf';
}
FauxWolf.prototype = new Wolf();
FauxWolf.prototype.totalHeuristic = function (x,y,world)
{
	var total;
	total += this.combatHeur(world.scanInRange(x,y,this.sightDist));
	return total;
}

