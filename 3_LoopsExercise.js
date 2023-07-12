// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1
while (i < 6){
  console.log(i)
  i++
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let y = 1
do {
  console.log(y)
  y++
} while (y<6)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let z = 1; z<6; z++){
  console.log(z)
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let a = 10
while (a <= 10 && a > 0){
  console.log(a)
a--
}

let b = 10
do {console.log(b)
    b--
} while (b <= 10 && b > 0)

for(let c = 10; c <= 10 && c > 0; c--){
  console.log(c)
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let first = 27
while (first <= 27 && first > 6){
  console.log(first)
first--
}

let second = 27
do {console.log(second)
    second--
} while (second <= 27 && second > 6)

for(let third = 27; third <= 27 && third > 6; third--){
  console.log(third)
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let may = 0
while (may > -1 && may <90){
may+=10
console.log(may)
}

let june = 0
do {june+= 10
console.log(june)
} while (june > 0 && june <90)

for (let july = 10; july> 9 && july <100; july+=10){
console.log(july)
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
//This loop is an infinite loop because the condition states that counterFour needs to be less than
//2 to run. Since counterFour starts at 1 and decrements, the condition is met infinitely.

let counterFour = 1;
while (counterFour > -101) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let start = -1
let favInt = 30
while (start != favInt){
  start++
  console.log(start)
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favNum = 99
for (let i = 0; i<101; i++){
  if (i!=favNum){
    console.log(i, "Not my favorite number")
  }
  else (console.log(i, "My favorite number!"))
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//
// I would use a do while loop if I wanted the loop to execute at least once before reaching the condition.
//I would use a while loop if I wanted the loop to execute only after the condition is met. 
//For loops are very useful for arrays and objects because you can set the condition to be arr.length
//or use a for...in loop. You also don't have to set a variable outside of the for loop which lessens 
//the chance a variable can mess with other things in your code.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter--;) {
    console.log("inside", insideCounter+1);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found the last problem hard and had to get my mentor to help. Otherwise, everything else was doable.

// Email your file to us or commit your file to GitHub and email us a link.
