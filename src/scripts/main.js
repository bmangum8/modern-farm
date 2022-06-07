console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

// this function returns a value, 
// so store that value in a variable
const yearlyPlan = createPlan() 

console.log(yearlyPlan)


/* testing my functions*/
import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus() //code from directions
console.log(asparagusSeed) //works! displays obj with three properties: type, height, output - in the developer console.

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
console.log(wheatSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
console.log(cornSeed)
//all work!