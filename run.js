animals = [];
dead = [];
var i;
for(var i=0;i<10;i++)
{
	animals.push( new Wolf(Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),100,0,0,0,1,10,10));	
} 
for(var i=0;i<10;i++)
{
	animals.push( new Bunny(Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),100,0,0,0,1,15));	
} 
var water = new Water([[50,50]]);
var grass = new Grass([[49,51],[49,50],[49,49],[50,51],[50,49],[48,51],[48,50],[48,49]]);
world = new World(animals,grass,water,100,100);
var kill = function(animals,animal)
{
	dead.push(animal);
	animals.splice(animals.indexOf(animal),1);
}
var feed = function(predator,prey)
{
	predator.hunger = 0;
}
var checkForDead = function(animals)
{
	for(var first=0;first<animals.length;first++)
	{
		if(animals[first].isdead()){
			kill(animals,animals[first]);
			first = first-1;
		}
	}
}
var timeStep = function(animals)
{
	for(var i=0;i<animals.length;i++)
	{
		animals[i].timestep(world);
	}
}
var drawAnimals = function(animals)
{

	var canvas = document.getElementById("theworld");
	canvas.width = canvas.width;
	var context = canvas.getContext("2d");
	for(var i=0;i<animals.length;i++)
	{
		if(animals[i].species == 'Wolf'){context.fillStyle="#636363"}
		if(animals[i].species == 'Bunny'){context.fillStyle="#ffff00"}
    		context.fillRect(animals[i].x*5,animals[i].y*5,5,5);
	}
	context.fillStyle="#008000";
    	context.fillRect(245,245,15,15);
	context.fillStyle="#8FD8D8";
    	context.fillRect(250,250,5,5);
}
var killSweep = function(animals)
{
	for(var animal=0; animal<animals.length; animals++)
	{
		if(animals[animal].species == 'Wolf')
		{
			var inrange = world.adjacentSweep(animals[animal]);
			for(var dead=0; dead<inrange.length;dead++)
			{
				feed(animals[animal],inrange[dead]);
				kill(animals,inrange[dead]);
			}
		}
	}
}
var veggieSweep = function(animals)
{
	for(var animal=0; animal<animals.length; animals++)
	{
		if(animals[animal].species == 'Bunny')
		{
			if(world.closestGrassDistance(animals[animal].x,animals[animal].y)<=Math.sqrt(25))
			{
				animals[animal].hunger =20;
			}
		}
	}
}
var drinkSweep = function(animals)
{
	for(var animal=0; animal<animals.length; animals++)
	{
		if(world.closestWaterDistance(animals[animal].x,animals[animal].y)<=Math.sqrt(25))
		{
			animals[animal].thirst =0;
		}
	}
}
var consumableSweep = function(animals)
{
	killSweep(animals);
	veggieSweep(animals);
	drinkSweep(animals);
}
var runOneState = function()
{
	drawAnimals(animals);
	timeStep(animals);
	consumableSweep(animals);
	checkForDead(animals);
}
window.setInterval(runOneState,2000);

