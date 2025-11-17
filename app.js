// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

// let userInput = parseInt(prompt("Enter a number: "));
// let sum=0;
// for(let i=1; i<=userInput; i++){
//     sum+=i;
// }

// console.log(sum);







// 2. Request two numbers and find only their largest common divisor.

// let num1 = parseInt(prompt("Enter a number: "));
// let num2 = parseInt(prompt("Enter a number: "));
// let max;
// for (let i=1; (i<=num1) && (i<=num2) ; i++ ){
    
//     if((num1%i==0)&&(num2%i==0)){
//         max=i;
//     }
// }
// console.log(max);




//3.  Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

// let userInput = parseInt(prompt("Enter a number: "));

// for(let i=1; i<=userInput ; i++){
//     if(userInput%i==0){
//         console.log(i);
//     }
// }





//4.  Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

// let userInput = parseInt(prompt("Enter any digit number: "));
// let digit=0;
// for(let i=1; i<=userInput; i*=10){
//     digit++;
// }

// console.log(digit);



//5.  Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

// let evenNum=0;
// let oddNum=0;
// let posNum=0;
// let negNum=0;
// let zeroNum=0;
// let userInput;
// for(let i=0;i<10;i++){
//     userInput=parseInt(prompt("Enter a number:  "));

//     if(userInput%2==0){
//         evenNum++;
//     }else{
//         oddNum++;
//     }
//     if(userInput>0){
//         posNum++;
//     }else if(userInput == 0){
//         zeroNum++;
//     }else{
//         negNum++;
//     }
// }

// console.log(`Positive: ${posNum}, Negative: ${negNum}, Zero's: ${zeroNum}, Even: ${evenNum}, Odd: ${oddNum}`);


//6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses. 
// let userInput;
// let num1;
// let num2;
// let operator;
// do{
//     userInput=prompt("Do you want to continue? (Y/n)");
// }while(userInput!="Y"){
//     num1=parseInt(prompt("Enter the first number: "));
//     num2 = parseInt(prompt("Enter the second number: "));
//     operator= prompt("Enter an operator + - * /: ");

//     switch(operator){
//         case "+":
//             console.log(`${num1} + ${num2} = ${num1 + num2}`);
//             break;
//         case "-":
//             console.log(`${num1} - ${num2} = ${num1 - num2}`);
//             break;
//         case "*":
//             console.log(`${num1} * ${num2} = ${num1 * num2}`);
//             break;
//         case "/":
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//             break;
//         default:
//             console.log("Invalid operator symbol!");
//     }
// }


//7.  Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

// let input = prompt("Enter any digit number: ");
// let num = parseInt(input);
// let shift = parseInt(prompt("Enter the number to shift the digits: "));

// let temp = num;
// let len = 0;

// while (temp > 0) {
//     len = len + 1;
//     temp = temp / 10;     
// }


//     while (shift < 0) {
//         shift = shift + len;
//     }
//     while (shift >= len) {
//         shift = shift - len;
//     }

//     let current = num;
//     let i = 0;
    
//     while (i < shift) {
//         let divisor = 1;
//         let temp2 = current;

//         while (temp2 >= 10) {
//             temp2 = temp2 / 10 | 0;
//             divisor = divisor * 10;
//         }

//         let firstDigit = current / divisor | 0;

//         let rest = current % divisor;

//         current = rest * 10 + firstDigit;

//         i = i + 1;
//     }

//     console.log(current);





//8. Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
// let currentDay = "Monday";

// do {
//     userInput = prompt(`${currentDay}. Would you like to see the next one?\n(Type OK to continue)`);
    
//     if (userInput === null || userInput !== "OK") {
//         break;  
//     }

    
//     switch(currentDay) {
//         case "Monday":    
//             currentDay = "Tuesday";     
//             break;
//         case "Tuesday":   
//             currentDay = "Wednesday";   
//             break;
//         case "Wednesday": 
//             currentDay = "Thursday";    
//             break;
//         case "Thursday":  
//             currentDay = "Friday";      
//             break;
//         case "Friday":    
//             currentDay = "Saturday";    
//             break;
//         case "Saturday":  
//             currentDay = "Sunday";      
//             break;
//         case "Sunday":    
//             currentDay = "Monday";      
//             break;
//     }
// } while (true);







//9. Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 

// for(let i=2; i<=9; i++){
//     for (let j=1; j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }




// 10. “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 
// let min = 0;
// let max = 100;

// alert("Think of a number from 0 to 100 (inclusive).");

// while (true) {
//     let guess = min + ((max - min) / 2 );   

//     let answer = prompt(
//         `Is your number > ${guess}, < ${guess}, or == ${guess}?\n` +
//         `Type: >   or   <   or   =`
//     );

//     if (answer === "=") {
//         alert(`Your number is ${guess}`);
//         break;                     
//     }
//     else if (answer === ">") {
//         min = guess + 1;           
//     }
//     else if (answer === "<") {
//         max = guess - 1;          
//     }
//     else {
//         alert("Please type only:  >  or  <  or  =");
//     }

//     if (min > max) {
//         alert("Something went wrong... Are you sure about your answers?");
//         break;
//     }
// }