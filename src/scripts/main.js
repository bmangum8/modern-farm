// console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

/*#1 Harvest Plan*/
// this function returns a value, 
// so store that value in a variable
const yearlyPlan = createPlan() 

// console.log(yearlyPlan)




/* testing my functions for #2 Creating Seeds*/
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



/* testing functions for #3 Tilling Field
Create a seed object.
Invoke addPlant() and specify the seed object as the argument.
Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.
*/
import { addPlant, usePlants } from "./field.js"

const sunflowerObject = {
    type: 'Sunflower',
    height: 380,
    output: 3
}

// addPlant(sunflowerObject) //adds obj to plantsInField array
// let newPlantList = usePlants() //makes a copy of plantsInField array
// console.log(newPlantList) //works! shows sunflowerObject in dev tool console


/* Testing functions for #4 Sowing the Field
In the main.js module, invoke the function that plants all of the seeds,  //plantSeeds()
and then get the plants array from the fields.js module.  //plantsInFieldArray
Then use console.log() to see if the plants array has been populated correctly.
*/

import { plantSeeds } from "./tractor.js" //plantSeeds function plants the seeds


// let seedsPlanted = plantSeeds(yearlyPlan) //invoke the function that plants all of the seeds
// addPlant(seedsPlanted) //adds obj to plantsInField array-//then get the plants array from the fields.js module- addPlant & usePlants
// let newPlantList = usePlants() //makes a copy of plantsInField array
// console.log(newPlantList)  //makes array in console



/* testing code for #5 Harvest Time
In the main.js module, get the array of plants from the field module, //plantsInFieldArray or usePlants() doesnt need param
and then harvest them by invoking the appropriate function that you defined above. 
Make sure you specify the array of plants as an argument to the harvesting function.

Then use console.log() to see your new array of harvested food to sell.
*/
import { harvestPlants } from "./harvester.js"

let seedsPlanted = plantSeeds(yearlyPlan) 
addPlant(seedsPlanted) 
let newPlantList = usePlants()
// console.log(newPlantList)   //get the array of plants from the field module

let foodToSell = harvestPlants(newPlantList) // array of plants as an argument
console.log(foodToSell)
