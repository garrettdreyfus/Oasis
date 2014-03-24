id =0;
function Animal (x,y,health,hunger,thirst,age,speed,sightDist)
{
	this.x = x;
	this.y = y;
	this.health = health;
	this.hunger = hunger;
	this.thirst = thirst;
	this.age = age;
	this.speed = speed;
	this.sightDist = sightDist;
	this.type = 'bunny';
	this.uniqueId = id+=1;

  // private func for recursion
	var getRandMove = function(maxHeurs, infinityBuster){
		var randIndex = Math.floor((Math.random()*3));
	  daMove = maxHeurs[randIndex];
	  if infinityBuster >= 100000{
	  	return false;
	  }
	  if (daMove[0] == -1){
	  	infinityBuster++;
	  	this.getRandMove(maxHeurs, infinityBuster);
		}
		else{
			return daMove
		}
	}
}
//move the distance
Animal.prototype.move = function (xdist,ydist)
{
	if ( Math.abs(xdist) + Math.abs(ydist) <= 2 ) // check to make sure this is what you want
	{
		this.x += this.xdist*speed;
		this.y += this.ydist*speed;
		return true;
	}
	else
	{
		return false;
	}
}
//returns Water Heuristic 
Animal.prototype.waterHeur = function (x,y,world)
{
	return world.closestWaterDistance(x,y) * this.thirst;
}
Animal.prototype.decide = function (world)
{
	var movements = [[1,1],[1,0],[1,-1],[0,1],[0,-1],[0,0],[-1,1],[-1,0],[-1,-1]];
	// add random element to decision,
	// but keep best choices as parameters
	// 0 index best 2 index worst
	var maxHeurs = [[-1],[-1],[-1]];
	for (var movement=0; movement<movements.length; movement++)
	{
		var x = movements[movement][0];
		var y = movements[movement][1];
		var totalHeur = this.totalHeuristic(x,y,world);

		var splPos;
		if(totalHeur>maxHeurs[0][0])
		{
			// maximumHeur = [totalHeur,x,y];
			splPos = 0;
		}

		else if(totalHeur > maxHeurs[1][0]){
			splPos = 1;
		}

		else if(totalHeur > maxHeurs[2][0]){
			splPos = 2;
		}
		maxHeurs.splice(splPos, 0, [totalHeur, x, y])
		maxHeurs.splice(3, 1)
	}
	
	var infinityBuster = 0;
	daMove = getRandMove(maxHeurs, infinityBuster)
	if daMove this.move(daMove[1], daMove[2]);
	else      this.move(0,0);
	
}

