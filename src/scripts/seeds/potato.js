/*
In each module define and export a function for creating a seed. 
Define the functions with the following syntax. 
If the plant is Asparagus, the function should be named createAsparagus. 
Same thing for all the others. Use arrow functions. 
*/

export const createPotato = () => {
    const potatoObject = {
        type: 'Potato',
        height: 32,
        output: 2
    }
   return potatoObject
   }