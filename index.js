//////////////// Practuce Sheet 1 ////////////////

// Q1. Legal and Illegal Variables in JacaScript

//////////////////////////////////// Answer ///////////////////////////////////////



//////////// Legal Variables //////////////
// (a) var myVariable;
// (c) var _special;
// (f) var $price;



//////////// Illegal Variables /////////////
// (b) var 123variable;
// (d) var first name;
// (e) var 7eleven;
// (g) var your-variable;







// Q2. Assignment Operators

//////////////////////////////////// Answer ///////////////////////////////////////


// var total = 10;
// total += 5;
// total -= 3;
// total *= 2;
// console.log(total); //////// Output : 24 ; ///////////








// Q3. Prompts And Variables (Math)

//////////////////////////////////// Answer ///////////////////////////////////////

// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");

// var sum = num1 + num2 ;
// console.log(sum);









// Q4. String Concatenation

//////////////////////////////////// Answer ///////////////////////////////////////

// var bookTitle = prompt("Enter Book Title :");
// var author = prompt("Enter Author Name :");
// var published = prompt("Enter Year Of Publication :");

// var message = "The Book" + " " + bookTitle + " " + "by" +" "+ author +" "+ "was published in " + published +".";
// console.log(message);









// Q5. Checking Even Or Odd Number

//////////////////////////////////// Answer ///////////////////////////////////////

// let number = +prompt("Enter A Number :");
// if(number % 2 === 0){
//     console.log(number +" is Even Number");
    
// }
// else{
//     console.log(number +" is Odd Number");
    
// }




// Q6. Grade Calculation

//////////////////////////////////// Answer ///////////////////////////////////////

// var percentage = +prompt("Enter our Percentage (Out of 100) ;");
// if(percentage >= 90 && percentage <=100){
//     console.log("A grade");
    
// }
// else if(percentage >= 80 && percentage <=89){
//     console.log("B grade");
    
// }else if(percentage >= 70 && percentage <=79){
//     console.log("C grade");
    
// }else if(percentage >= 60 && percentage <=69){
//     console.log("D grade");
    
// }
// else{
//     console.log("F grade");
    
// }






// Q7.Maximum of Three Number

//////////////////////////////////// Answer ///////////////////////////////////////


// var num1 = +prompt("Enter First number :");
// var num2 = +prompt("Enter Second number :");
// var num3 = +prompt("Enter Third number :");

// if (num1 > num2 && num1 > num3){
//     console.log(num1 + " is Greater Number");
    
// }
// else if (num2 > num1 && num2 > num3){
//     console.log(num2 + " is Greater Number");
    
// }

// else{
//     console.log(num3 + " is Greater Number");
    
// }






// Q8.Sum of all Even number (1-100). using loop and  post-increment

//////////////////////////////////// Answer ///////////////////////////////////////


// var sum = 0;
// for (let i = 1; i <= 100; i++) {
//    if (i %2 === 0) {
//     sum+=i;
//    }
    
// }
// console.log(sum);






// Q9.Sum of all Even number (1-100). using loop and  post-increment

//////////////////////////////////// Answer ///////////////////////////////////////

// 1)
 var a=5; var b=3; var c=7;   var result = a++  -  ++c +  b + ++c - b++ ;
//     6     4     8=>9               5   -   8 +  3 + 9 - 3
//                       result =  6
// console.log(result);


// 2)
 var a=1; var b=2; var c=0;   var result = ++a  -  --a +  ++c + c - a++ + --b ; 
//   2=>1=>2    1       1                    2   -   1  +  1  + 1 - 1   +  1
//                       result =  3
// console.log(result);

// 3)
 var a=2; var b=4; var c=6;   var result =  a++ - --b + c-- + b++ - ++c; 
//     3     3=>4     5=>6                  2   -   3 +  6  + 3   - 6
//                       result =  2
// console.log(result);

// 4)
 var a=10; var b=5; var c=8;   var result =  ++a + --b - c++ - ++c + b--; ;
//     11     4=>3    9=>10                 11   +   4 -  8  - 10  + 4
//                       result =  1
// console.log(result);



// 5)
 var a=3; var b=2; var c=1;   var result =  b-- - --a + ++c - a++ + ++b - a;
//   2=>3     1=>2      2                   2   -   2 +  2  - 2   + 2   - 3
//                       result =  -1
// console.log(result);

// 6)
 var a=1; var b=5; var c=3;   var result = ++c + a-- - b++ + c-- - --a;
//   0=>-1     6     4=>3                  4   +   1 -  5  + 4   - -1
//                       result =  5
// console.log(result);

// 7)
 var a=7; var b=0; var c=1;   var result = ++c - a-- + --b + b++ - --c + c ;
//     6    -1=>     2=>1                  2   -   7 + (-1)+ (-1) - 1  + 1
//                       result =  -7
// console.log(result);

// 8)
 var a=3; var b=4; var c=9;   var result = --a + ++b + c-- - b++ + ++c - --c - --b;
//     2    5=>6=>5    8=>9=>8             2   +   5 +  9  - 5   + 9   -  8  - 5
//                       result =  7
// console.log(result);

// 9)
 var a=6; var b=1; var c=3;   var result =  c++ - b + a-- - --c + b ;
//     5     1     4=>3                     3   - 1 +  6  - 3   + 1
//                       result =  6
// console.log(result);

// 10)
 var a=10; var b=5; var c=8;   var result = a + --b - c - ++c + b-- + a++ ; 
//    11     4=>3    9                     10 +   4 - 8 - 9   + 4   +10
//                       result =  11
// console.log(result);







// Q10.Sum of all Even number (1-100). using loop and  post-increment

//////////////////////////////////// Answer ///////////////////////////////////////





// 1.
//  console.log(undefined && false);  // undefined
// // 2. 
// console.log(true && false); //false
// // 3.
//  console.log(true && undefined); //undefined
// // 4.
//  console.log(undefined && undefined); //undefined
// // 5.
//  console.log('undefined' || 'true'); // undefined      string
// // 6.
//  console.log(null || 'true'); //true      string
// // 7. 
// console.log(null || undefined); //undefined
// // 8. 
// console.log(null && true || false); //false
// // 9. 
// console.log(null && true || false && true); //false
// // 10.
//  console.log(null && true || true && true); //true
// // 11.
//  console.log((null && true) || (true && 1)); //1




























/// Day 20: Count Vowels in a String 


// ////////////////////////////        Answer       ///////////////////////////

// let str = prompt("Enter a string").toLowerCase();
// let count = 0;
// let isVowelFound = [];

// for (let i = 0; i < str.length; i++) {
//    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' 
//     || str[i] === 'o' || str[i] === 'u') {
//         isVowelFound.push(str[i]) ;
//     count++;
    
//    }
    
// }
// document.writeln("User Input :"+str );
// document.writeln("<br> Vowels: " + isVowelFound.join(","));

// document.writeln("<br> Total Vowels: " + count);






    // {}
