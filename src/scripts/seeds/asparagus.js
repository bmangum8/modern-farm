/*
In each module define and export a function for creating a seed. 
Define the functions with the following syntax. 
If the plant is Asparagus, the function should be named createAsparagus. 
Same thing for all the others. Use arrow functions. 


Each of these functions should return an object with the following properties:
type
height
output
*/

export const createAsparagus = () => {
 const asparagusObject = {
     type: 'Asparagus',
     height: 24,
     output: 4
 }
return asparagusObject
}
