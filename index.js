/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.*/
    console.log("The numbers from 1 to 20")
    for (let i = 0; i <= 20; i++) {
   console.log(i);
}
   /* b. Print only the ODD values from 3 - 29, one number per line.*/
console.log("The odd numbers from 3 to 29")
for (let j=3;j<29;j++){
if(j%2==0)
    {console.log(j);}}
   /* c. Print the EVEN numbers 12 to -14 in descending order, one number per line.*/

   console.log("The even numbers from 12 to -14")
   for (let i=12;i>-15;i-=2){
   console.log(i);
}
    /*d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
 console.log("Print numbers from 50 - 20 in descending order")
   for (let i=50;i>20;i--){
     if(i%3==0)
   console.log(i);
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let stringVar = "LaunchCode";
let arrayVar = [1,5, 'LC101', 'blue', 42];

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.*/
  console.log("Print each element of the array to a new line.");
  for(let i=0; i<stringVar.length; i++)
  {console.log(stringVar[i]);}

  for(let i=0; i<arrayVar.length; i++)
  {console.log(arrayVar[i]);}
  /*b. Print each character of the string - in reverse order - to a new line. */ 
  console.log("Print each each character of the string - in reverse order - to a new line.");
  let reversed="";
  for(let i=0; i<stringVar.length; i++)
  {
    reversed = stringVar[i]+reversed;}
    console.log(reversed);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.*/
  let initialArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenArray=[];
  let oddArray=[];

console.log("Odd numbers:")
for(let i=0; i<initialArray.length;i++){
if(initialArray[i]%2!=0){
oddArray.push(initialArray[i])}}

console.log(oddArray);
console.log("Even numbers:")
for(let i=0; i<initialArray.length;i++){
if(initialArray[i]%2==0){
  evenArray.push(initialArray[i]);}
}
console.log(evenArray);


 /* b. Print the arrays to confirm the results. */