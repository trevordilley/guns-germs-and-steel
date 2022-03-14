# guns-germs-and-steel
A game aimed at modeling some of the high level takeaways from Jared  Diamond's book "Guns, Germs, and Steel"

Here's the book: https://books.google.com/books/about/Guns_Germs_and_Steel.html?id=kLKTa_OeoNIC#v=onepage&q&f=false

*Here's an awesome couple videos which are essentially a summary of the book*

* Ameripox: The missing plague: https://youtu.be/JEYh5WACqEk
* Zebras vs Horses - Animal Domestication: https://youtu.be/wOmjnioNulo

By CGP Gray

Essentially, those high level points are:

* Race has nothing to do with the shape of history (western civilizations colonization and extermination of indigenous peoples across the planet)
* The domestication of plants and animals is a key differentiator
* The dominant axis of continents is critical to the spread of culture and resources
  * The Americas are North-South vs. Eurasia's West-East axis
* The density of human population and proximity of animals created plagues which were not present in less dense populations. 


Those points above are why Europeans we're able to decimate Native Americans, why the South African Pygmies have almost no remant of their native languages, and essentially accounts for the entire theory of how history has played out. 

## The Game

Modeling this I think would be an engaging and straight forward game to prototype!

I imagine a very simple real time strategy game where the player controls a character that
Collects food. As they collect food they get a bit bigger until they "split". 

As they move they get smaller and smaller. When they stop moving the simulation stops. 

Some food fights back (animals). Hits shrink the players characters.

Some food can be captured (domestication). Captured food creates more food slowly. Allowing 
The player the ability to split faster. 

Other players can be attacked. 

Some "power ups" (technology) can be found which make the player attacks more powerful. 

The goal is to eat the most food. 

The key point is that all of this is distributed UNEVENLY. 

## Tech Stack
The technologies to build the game are below.

### Framework: PhaserJS
Phaser is a very approachable and ergonomic game dev framework. 

Recently I stumbled onto a game named "Vampire Survivors" which is written 
With Phaser: https://store.steampowered.com/app/1794680/Vampire_Survivors/

I was impressed by the number of entities on the screen at once, and paired with an
ECS (Entity-Component-System) framework like `bitecs`
https://github.com/NateTheGreatt/bitECS

I'm confident we have a lot going on the screen at once!

### Language: Typescript

https://www.typescriptlang.org/

Typescript is a superset of JavaScript. It has more safety gaurantees so you don't accidentally try to add a number to a `Cat`. 
It's also super ergonomic and productive!

### Editor: Intellij or VSCode
I'm pretty sure the free version of Intellij has plenty of features but VSCode is also super productive with typescript. 
