// Loops in programming are used to repeatedly execute a block of code until a certain condition is met. They are essential for performing repetitive tasks efficiently. JavaScript provides several types of loops, including for, while, and do-while.

/* 
For Loop
The for loop is commonly used when the number of iterations is known beforehand.

syntax : 
for (initialization; condition; update) {
    // Code to be executed in each iteration
}

*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}



/*
While Loop
The while loop executes a block of code as long as a specified condition is true.

syntax:
while (condition) {
    // Code to be executed while the condition is true
}
*/

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}



/*
do-while Loop
The do-while loop is similar to the while loop, but it guarantees that the block of code is executed at least once before checking the condition.

syntax:
do {
    // Code to be executed
} while (condition);
*/

let j = 0;

do {
    console.log(j);
    j++;
} while (j < 5);