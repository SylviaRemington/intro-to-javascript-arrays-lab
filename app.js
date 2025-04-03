//FROM FEBRUARY 24TH, 2025 SOFTWARE ENGINEERING FT MATT HUNTINGTON CLASS --FIRST TIME CREATING ARRAYS -- non completed project for that class

/*EXERCISE ONE
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/
// const foods = [];  
// console.log('Exercise 1 result:', foods);



/*EXERCISE TWO
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

/* EXERCISE 2 - This exercise is the correct answer */
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// console.log('Exercise 2 result:', foods);


/* EXERCISE 2 - I was trying to do a different version, but I don't think it answered the question. And it didn't work.
Not sure why theese were undefined since they reference index 0 and index1 */
// const foods = ['pizza', 'cheesburger'];
// const firstFood = foods[0];
// const secondFood = foods[1];
// console.log('Exercise 2 result:', foods.length)
// console.log('Exercise 2 result:', firstFood.push, secondFood.push)



/*EXERCISE THREE
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');

// console.log('Exercise 3 result:', foods);



/*EXERCISE FOUR
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];

// console.log('Exercise 3 result:', foods);
// console.log('Exercise 4 result:', favFood);




/*EXERCISE FIVE
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu')

// console.log('Exercise 5 result:', foods);



/*EXERCISE SIX
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu')
// foods.splice(1,1, 'sushi', 'cupcake')

// console.log('Exercise 6 result:', foods);



/* EXERCISE SEVEN
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

/*First Attempt at 7 - still trying to remember and figure out arrays/objects. 
Slice is a little confusing to me so far. Researching it. Only coming out with cupcake in Terminal.*/
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');

// const yummy = foods[1,2];

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);

/*Second Attempt*/
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');

// const yummy = foods.slice(0,3);

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);


/*Third Attempt - THIS ONE IS CORRECT!!!! YAY!!!!*/
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');

// const yummy = foods.slice(1,3);

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);



/*EXERCISE EIGHT
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

/* First Draft... incorrect... */
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');
// const yummy = foods.slice(1,3);
// const indexOfTofu = foods.indexOf('tofu')

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);
// console.log('Exercise 8 result:', soyIdx);

/* SECOND DRAFT - CORRECT!!!! */
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');
// const yummy = foods.slice(1,3);

// const soyIdx = foods.indexOf('tofu')

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);
// console.log('Exercise 8 result:', soyIdx);



/*EXERCISE NINE
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

/*First Draft - ok, but I just realized that I didn't use the correct -> */
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');
// const yummy = foods.slice(1,3);

// const soyIdx = foods.indexOf('tofu')
// const allFoods = foods.join('-');

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);
// console.log('Exercise 8 result:', soyIdx);  
// console.log('Exercise 9 result:', allFoods);


/*Second Draft - CORRECT*/
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');
// const yummy = foods.slice(1,3);

// const soyIdx = foods.indexOf('tofu')
// const allFoods = foods.join(' -> ');

// console.log('Exercise 6 result:', foods);
// console.log('Exercise 7 result:', yummy);
// console.log('Exercise 8 result:', soyIdx);  
// console.log('Exercise 9 result:', allFoods);    


/*EXERCISE 10
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:

MY NOTES: The includes() method is like a question you ask an array: "Hey, do you have this item in you?"
It checks if a specific value is in the array. If it finds it, it will say "Yes, it’s there!" and give you true. 
If it doesn’t find it, it will say "Nope, not there." and give you false.
*/

/* Yay! Exercise 10 below is correct! Woohoo! */
const foods = [];  
foods.push('pizza');      
foods.push('cheeseburger'); 
foods.unshift('taco');
const favFood = foods[1];
foods.splice(2, 0, 'tofu');
foods.splice(1,1, 'sushi', 'cupcake');
const yummy = foods.slice(1,3);

const soyIdx = foods.indexOf('tofu');
const allFoods = foods.join(' -> ');
const hasSoup = foods.includes('soup');

console.log('Exercise 6 result:', foods);
console.log('Exercise 7 result:', yummy);
console.log('Exercise 8 result:', soyIdx);  
console.log('Exercise 9 result:', allFoods); 
console.log('Exercise 10 result:', hasSoup);

/* Gonna keep working on this in the morning before class and through the weekend! :) */