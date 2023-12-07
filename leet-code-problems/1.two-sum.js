//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function(nums, target) {
const len=nums.length;
  for(let i=0 ;i< len; i++){
      for(let j=i+1; j<len; j++){
          if(nums[i]+nums[j]===target){
              return [i,j]
          }
      }
  }  
};
console.log(twoSum([1,2,3,4,5,6],7))
// ====== OUTPUT ========
// [1,5]
