const arr1 = ['Hello', 34567, false, null];

console.log(arr1);

console.log( typeof arr1 );

console.log(Array.isArray(arr1));

const movies = [ 'Dangal', 'Kill', 'Manji', 'DDLJ', 'Jawan', 'PK'];

console.log(movies.length); //also works with strings
//indexing

console.log(movies[3] ); //also works with string
console.log(movies.at(-2) ); //also works with string

movies[3] = 'Krrish';
console.log(movies);

console.log( movies.indexOf('Kill'));

//slicing 

console.log(movies);
console.log(movies.slice(2, 5) );
console.log(movies.slice(2, -3) );
console.log(movies.slice(2) );
console.log(movies.slice(2, 60) );

// adding and removing elements 

movies.push('Kalki'); //adds element at end of array
console.log(movies);

movies.unshift('KGF'); //add at start
console.log(movies);

movies.pop(); //removes elements from end 
movies.shift(); //removes element from start

console.log(movies);

// movies.splice(3, 2); //remove 2 element starting from index3
// movies.splice(3, 2, 'Deadpool', 'Venom')

movies.splice(3, 0, 'Deadpool', 'Venom')
console.log(movies);



