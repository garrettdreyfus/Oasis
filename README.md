Oasis
=====
Oasis is an attempt to build a large "world" of animals with crude but hopefully interesting artificial intelligence.

#What animals are going to be modeled?
Right now the project is focused on a very simple predator prey model. 

##Hivewolf
###Things a hive wolf can do right now

- Remember locations of bunnies and patrol those locations
- Search for water
- 5 level deep combat decisions e.g. considering what each movement would result in 5 moves later

###Things a hive wolf will do

- remember not only locations but actions and deduce things about its mental models of each bunny e.g.  it saw a bunny one time step ago and it moved by 3, therefore its speed is 3
- mate with other wolves the current idea is each child will have the average of its parents with a random factor to deal with mutation
- exchange memories with other wolves

##Bunny
###Things a bunny can do right now
- search for water and grass
- one level deep run-away combat decisions

###Things a bunny will do 
- mate

# Structure 
The general structure of the project is this. There is a main Animal prototype which the bunny and wolf prototype inherit from. Each animal prototype is required to have one function called totalHeuristic which the Animal prototype uses for the function decide. This can be anything, even a random number, see examples of the structure in the wolf.js and bunny.js files. Each animal should also have a Faux model prototype which are meant to represent an animals internal model of the other animals it meets ( take alook at FauxWolf and FauxBunny for examples). Later as persistent knowledge is integrated a list of faux models with be an attribute of each animal so that it can make deductions about the outside world.

#Milestones

1. Running it
2.Persistent knowledge for Wolves
3. mating
4. Completed and running all on the server
5. Distributed decision making through meteor
