/*
In each module define and export a function for creating a seed. 
Define the functions with the following syntax. 
If the plant is Asparagus, the function should be named createAsparagus. 
Same thing for all the others. Use arrow functions. 
Do not use the function keyword.

Each of these functions should return an object with the following properties:
type
height
output
*/

export const createWheat = () => {
    const wheatObject = {
        type: 'Wheat',
        height: 230,
        output: 6
    }
    return wheatObject
}