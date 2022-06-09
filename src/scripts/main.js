// console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

// this function returns a value, 
// so store that value in a variable
const yearlyPlan = createPlan() 

// console.log(yearlyPlan)


/* testing my functions*/
import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus() //code from directions
// // console.log(asparagusSeed) //works! displays obj with three properties: type, height, output - in the developer console.

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
// console.log(wheatSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
// console.log(cornSeed)
//all work!



/* testing functions*/
import { addPlant, usePlants } from "./field.js"

const sunflowerObject = {
    type: 'Sunflower',
    height: 380,
    output: 3
}
// addPlant(sunflowerObject) //adds obj to plantsInField array
//let newPlantList = usePlants() //makes a copy of array
//console.log(newPlantList) //works! shows sunflowerObject in dev tool console



/*
In the main.js module, invoke the function that plants all of the seeds,  //plantSeeds()
and then get the plants array from the fields.js module.  //plantsInFieldArray
Then use console.log() to see if the plants array has been populated correctly.
*/

//how do I import an array?
import { plantSeeds } from "./tractor.js" //plantSeeds function plants the seeds

let seedsPlanted = plantSeeds(yearlyPlan)
console.log(seedsPlanted) // yay works! --need to add corn 


