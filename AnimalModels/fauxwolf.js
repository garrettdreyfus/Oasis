function FauxWolf (wolf)
{
	Animal.call(this,x,y,health,hunger,thirst,age,speed,sightDist);
	this.attack = attack;
	this.knownLocations = [];
	this.species = 'Wolf';
}
FauxWolf.prototype = new Wolf();
Bunny.prototype.totalHeuristic = function (x,y,world)
{
	var total;
	total += this.combatHeur(world.scanInRange(x,y,this.sightDist));
	return total;
}

