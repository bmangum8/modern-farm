/*
1. In this module, define and export a harvestPlants function.
2. The harvestPlants function must accept the plants array as input.
3.  function will return an array of seed objects. ---const empty array
4. Iterate the array of growing plants. ---for of loop
5. On each plant, get the value of the output property. ---for plant of plants, plant.output = number of objs created
--my thoughts: needs to loop through and add as many times as the output number is
6. Add that many of the plant objects to the array that the function returns. ----.push to empty array

For example, if the current plant is a peanut object with an output of 2...
Then the array that the function returns should have two identical objects added to it. --obj * value of output property
use createSeed() for each plant? within function?
or use .map
*/



//accept the plants array as input, return of addPlant() and usePlant()


export const harvestPlants = (plantArray) => {
    //empty array to push plant obj into
    let harvestedPlants = []
    //for loop to loop through objs in plantArray
    for (const plant of plantArray) {
        //need to set var to output number
let numberOfObjects = ''
        //corn output number needs to be divided by 2
        if (plant.type === 'Corn') {
            numberOfObjects = plant.output / 2
        } else {
            numberOfObjects = plant.output
        }
        // i loop to loop through number of times = output number
        for (let i = 0; i < numberOfObjects; i++) {
            //push plant object into empty array after it has looped through
            harvestedPlants.push(plant)
        }

    }
    return harvestedPlants
}
//I don't think the corn is working












/*

        const numOfObjects = plant.output  //saved value of output property as new variable


        if (plant.type === 'Corn') {
            harvestedPlants.push(numOfObjects / 2)
        } else {
            harvestedPlants.push(...plant * numOfObjects)
        }
    }
    return harvestedPlants //return an array of seed objects
}
*/


// const copyArray = plantSeeds()
// let harvest = harvestPlants(copyArray)
// console.log(harvest)


/*
ideas---
if (plant.type = 'Asparagus') {
    let newAsp = createAsparagus()
   harvestedPlants.push(newAsp * numOfObjects)  //push the value
   }
        
}
// plantArray.map(plant => {...plant}*numOfObjects)
*/
/*
Again, the exception is corn. Half of your corn will be sold to cattle ranchers, 
so only half of the output of each corn plant will be added to the array that this function returns.

In the main.js module, get the array of plants from the field module, 
and then harvest them by invoking the appropriate function that you defined above. 
Make sure you specify the array of plants as an argument to the harvesting function.

Then use console.log() to see your new array of harvested food to sell.
*/