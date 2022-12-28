/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �*/

let markMass=78;
let markHeight=169;
let johnMass=92;
let johnHeight=195;

let markBMI=(markMass/markHeight**2);
let johnBMI=(johnMass/johnHeight**2);
markHigherBMI=(markBMI>johnBMI);
console.log(markHigherBMI);

let markMass=95;
let markHeight=188;
let johnMass=85;
let johnHeight=176;

let markBMI=(markMass/markHeight**2);
let johnBMI=(johnMass/johnHeight**2);
markHigherBMI=(markBMI>johnBMI);
console.log(markHigherBMI);



// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 




const calcAverage=(a,b,c)=>(a+b+c/3);

 const ScoreDolphins=calcAverage(44,23,71);
 const ScoreKoalas=calcAverage(65,54,49);

const CheckWinner=function checkWinner (avgDolphins,avgKoalas){
    if (avgDolphins>2*avgKoalas){
    console.log("Dolphin Wins");
    }
     else if((avgKoalas>2*avgDolphins))
     {
        console.log("Koala Wins")
    }
    else{
         console.log(`No one wins`)
    }

}
 CheckWinner(ScoreDolphins,ScoreKoalas)
