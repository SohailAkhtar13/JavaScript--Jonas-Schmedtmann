
function CalcMax(Array)  //fumction declaration and parameter passing 
{ 
  let max = Array[0];   //initializing the fist value of array as maximum
  for (let i = 0; i < Array.length; i++) //looping the whole array
  {
    if (Array[i] > max) max = Array[i]; //Checking and updating for each value in the loop
  }
  console.log(max);  //Displaying in the cosole
}
CalcMax([1, 2, 3]); //calling the functions 
