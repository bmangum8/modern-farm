/*
1.  define and export a plantSeeds function.
2. function must accept the year's planting plan as input
*/

import { createPotato } from "./seeds/potato.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


/*
3. The plan is an array. It contains 3 arrays representing the rows in the field to be plants. 
    Figure out how to iterate both the parent array and the child arrays.  

4. As you iterate the row of food types to be planted, invoke the corresponding factory function 
(e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
Take that seed and add it to the array of plants in the field module
My thoughts:
if statements, name === seed, createSeed(), returns seedObject
then pass seedObject as argument into addPlant function. addPlant() add seedObject to plantsInFieldArray
*/

export const plantSeeds = (tacoPlantingPlanArray) => { //will pass return of makeplan function as argument
    let plantAdded = []
    for (let i = 0; i < tacoPlantingPlanArray.length; i++) {      //I got this for loop from w3schools or jstutoria.net
        // loop the inner array
        for (let j = 0; j < tacoPlantingPlanArray[i].length; j++) {

            let currentSeed = tacoPlantingPlanArray[i][j]
            if (currentSeed === 'Potato') {  //define variable current seed--. write mulitple if statements
                const potatoObject = createPotato()
                plantAdded = addPlant(potatoObject) //addPlant function returns plantsInFieldArray
       
            } else if (currentSeed === 'Asparagus') {
                const asparagusObject = createAsparagus()
                plantAdded = addPlant(asparagusObject)

            } else if (currentSeed === 'Soybean') {
                const soybeanObject = createSoybean()
                plantAdded = addPlant(soybeanObject)

            } else if (currentSeed === 'Sunflower') {
                const sunflowerObject = createSunflower()
                plantAdded = addPlant(sunflowerObject)

            } else if (currentSeed === 'Wheat') {
                const wheatObject = createWheat()
                plantAdded = addPlant(wheatObject)

            } else if (currentSeed === 'Corn') {
                const cornArray = createCorn() //cornArray is an array
                for (const cornObject of cornArray) { //loop through array and pull out obj
                plantAdded = addPlant(cornObject)
                }
            }
        }
    }

    return plantAdded //yay works!! 
}








//come back and add corn --- make sure the conditional loops through corn array with for of loop?