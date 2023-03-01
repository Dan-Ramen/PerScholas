// Variables !!

// (var, let, const)
// Var and let are mutable (can be changed)
// const is immutable (cannot be changed)

// let cat = "Meow"
// console.log(cat)

// const name = "Daniel"
// console.log(name)

// Data Types !!

// let number = 1 // number
// let sum = number + number
// console.log(sum)

// let question = true || false // Boolean
// if(question == true){
//     console.log(true)
// }else{
//     console.log(false)
// }

// = vs == vs ===

// = assignment operator: used to give a value
// == loose comparison operator: looks at data type & value to compare;
// if either are comperable then the statement will evaluate as true
// === strict comparison: compares values and both data types must match
// for the statement to be true

// let word1 = 1
// let word2 = "1"

// if(word1 == word2){ // comes off as true bc 1 = "one"
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(word1 === word2){ // comes off as false bc 1 is a num and "one" is a word
//     console.log(true)
// }else{
//     console.log(false)
// }

// Conditionals !!

// if (true){
//     if(true){
//         // Do this
//     }else{
//         // Do this
//     }
// } else{
//     // Do this
// }

// x = 5 // Assigning var x with 5
// if(x == 10){ // checking the var x to this condition
//     console.log(true)
// }else{
//     console.log(false)
// }

//excercise:
// let age = 21

// if(age >= 18){
//     console.log("Access Granted")
// } else{
//     console.log("Access Denied")
// }

// nested if
// y = 102
// if(y<=100) {
//     if(y%2==0){
//         console.log("positive") //to do something
//     } else{ 
//         console.log("negative") //to do another
//     }
// } else {
//         console.log("huge") // to do other stuff
// }

// let n = 55
// if(n > 55){
//     if(n >= 70){
//         if(n >= 80){
//             if(n >= 90){
//                 console.log("Grade: A")
//             }else{
//                 console.log("Grade: B")
//             }
//         }else{
//             console.log("Grade: C")
//         }
//     }else{
//         console.log("Grade: D")
//     }
// }else{
//     console.log("Grade: F")
// }

// // if, else
// let grade = 96
// if(grade >= 90){
//     console.log("Grade: A")
// }else if(grade >= 80){
//     console.log("Grade: B")
// }else if(grade >= 70){
//     console.log("Grade: C")
// }else if(grade >= 55){
//     console.log("Grade: D")
// }else{
//     console.log("Grade: F")
// }

// Loops !!

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// exercise: make a loop starting from 6 printing multiples of 3 ending at 60

// for(let i = 6; i <= 61; i += 3){
//     console.log(i)
// }

// for(i = 0; i <= 60; i++){
//     if(i >= 6){
//         console.log(i)
//     }
// }

// exercise: print a triangle

// var tri = ""
// for(i = 0; i <= 7; i++){
//     tri = tri + "#"
//     console.log(tri)
// }

// Remainder Operator - % !!
4 % 3
//returns 1
20 % 2
//returns 0
20 % 9
//returns 2

// Exercise: write a loop that iterates 1-20. Prints "prime" for all prime
//numbers, "even" for all even numbers, and "odd" for all odd numbers

 for(i = 1; i <=20; i++){
    let flag = 0;
    for(let j = 2; j < i; j++){ //used to loop between 2 to 20
        if(i % j == 0){ //if any number remainder gives a 0, its not a prime number
            flag = 1; // so this is now set to 1
            break;
        }
    }
    if (i > 1 && flag == 0){ //if number is greater than 1 and not divisible by other numbers
        console.log(`${i} is Prime`)
    }else{
       if(i % 2 !== 0){ //even numbers give back a 0, so it makes sense that odd numbers won't
        console.log(`${i} is Odd`)
       }else if(i % 2 == 0){
        console.log(`${i} is Even`)
    }     
    }
 }

// Arrays !!

// let movies = ['The Thing', 'Interstellar', 'Catch Me if You Can']
// let firstMovie = movies[0] // 'The Thing'
// movies.push('Saw', 'Baby Driver') // Adds to the end of an Array
// movies.unshift('Nemo') // Adds to the front of an Array
// let movie = movies.pop() // removes a single element from the end
// movie = movies.shift() // removes a single element from the front

// Array.splice

// movies => ['Nemo', 'The thing', 'Interstellar', 'Catch Me if You Can', 'Saw', 'Baby Driver']
// let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien')
// movies => ['Nemo', 'Interstellar', 'Saw', 'Baby Driver', 'Spaceballs', 'Alien']
// removedMovies = movies.splice(0, 3)
// movies => ['Interstellar', 'Saw', 'Spaceballs', 'Alien']
// removedMovies = movies.splice(1, 0, 'The Sting')
// removedMovies => []
// movies => ['Spaceballs', 'The Sting', 'Alien']

// Iterate over all of the elements in an array --

// movies.forEach(function(movie, idx) {
//     console.log(idx + ') ' + movie) 
// })

// for(let movie of movies){
//     if(movie === 'The Last Airbender') break; // loop can be exited with break when using for...of
//     console.log(movie)
// }
 
// The .slice method always returns a new array and doesnt mutate the source array --
// movies => ['Spaceballs', 'The Sting', 'Alien']
// let lastTwoMovies = movies.slice(1,3) // ['The Sting', 'Alien']

//alternatively you can use the spread (...) operator -- 
// movies => ['Spaceballs', 'The Sting', 'Alien']
// let moviesCopy = [...movies]

//copying and inserting additional elements simutaneously
// movies => ['Spaceballs', 'The Sting', 'Alien']
// let moreMovies = ['Interstellar', ...movies, 'Contact']

//creating a single string from an array
// let movieStr = movies.join()
// => 'Spaceballs,The Sting,Alien'

// movieStr = movies.join('    ')
// => 'Spaceballs  The Sting   Alien'

// Objects !!