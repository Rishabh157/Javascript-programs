// Q - Checking Sum Zero in the Array
// arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8] => Input

// O(n^2) quradict time complexity

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



// there is another logic but this logic only work with sorted Array
// O(n) linear time complexity

function linerCheckArray(arr)
{
 let left = 0
 let right = arr.length - 1

 while(left < right)
 {
  sum = arr[left] + arr[right]

  if(sum === 0)
  {
   return [arr[left], arr[right]]
  }
  else if(sum > 0)
  {
   right--;
  }
  else
  {
   left++;
  }
 }

}

let ans = linerCheckArray([-5, -4, -3, -2, 0, 2, 4, 6, 8])
console.log(ans)