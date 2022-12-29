function CalcMax(Array) //fumction declaration and parameter passing
{
    let max = Array[0]; //initializing the fist value of array as maximum
  let min = Array[0]; //initializing the fist value of array as minimum
  for (let i = 0;i < Array.length;i++) //looping the whole array
   {
    if (Array[i] > max) max = Array[i]; //Checking and updating max for each value in the loop
    if (Array[i] < min) min = Array[i]; //Checking and updating min for each value in the loop
  }
  console.log(max, min); //Displaying in the cosole
}
CalcMax([1, 54, 20, 31, 12, 13, 6]); //calling the functions
