/*
1. Define a variable in this module whose initial value is an empty array. 
This array will store all of the plants that are growing in the field. 
Do not export the array.
*/

let plantsInFieldArray = []

/*
2. In the module, define and export a function named addPlant.
3. The addPlant function must accept a seed object as input. 
The function will add the seed to the field 
How do you add something to an array? .push()
*/

/*
5. Be aware that when planting corn, an array of objects will be 
provided instead of a single object like all the other type of seeds. 

Investigate the Array.isArray method to check if corn got passed in, or one of the others
syntax array.isArray(valueToBeChecked); returns true if value is array, false otherwise
*/

export const addPlant = (seedObject) => {
    // for (const plant of plantsInFieldArray) {
        if (Array.isArray(seedObject)) {
            plantsInFieldArray.push(seedObject[0])
            plantsInFieldArray.push(seedObject[1])

        } else {
            plantsInFieldArray.push(seedObject)
            
    }

    return plantsInFieldArray
}


/*
4. Define and export a function named usePlants 
that returns a copy of the array of plants.
my thoughts: use spread opperator ...variable
*/

export const usePlants = () => {
    let copyPlantsInField = [...plantsInFieldArray]
    return copyPlantsInField
}








