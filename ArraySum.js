// Q - Checking Sum Zero in the Array
// arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8] => Input


function CheckArraySum(arr) 
{
 for (ele of arr) {
  for (let i = 1; i < arr.length; i++)
   {
   if (ele + arr[i] === 0) 
   {
    return [ele, arr[i]]
   }
  }
 }
}

let result = CheckArraySum([-5, -4, -3, -2, 0, 2, 4, 6, 8])

console.log(result)