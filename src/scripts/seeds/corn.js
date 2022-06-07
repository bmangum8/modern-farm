/*
In each module define and export a function for creating a seed. 
Define the functions with the following syntax. 
If the plant is Asparagus, the function should be named createAsparagus. 
Same thing for all the others. Use arrow functions. 

The one exception is corn. 
The createCorn function should return an array with two identical objects in it. 
Each with the proper keys and values.

type
height 180
output 6
*/

//should I just make 2 identical objects?
export const createCorn = () => {
    const cornArray = [
        {
            type: 'Corn',
            height: 180,
            output: 6
        },
        {
            type: 'Corn',
            height: 180,
            output: 6  
        }
    ]
    return cornArray
}