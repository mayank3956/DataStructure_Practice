
var numIdenticalPairs = function(nums) {
    let count = {}
    let total=0;
    for(let i=0; i<nums.length; i++){
          if (count[nums[i]]) {
        count[nums[i]] += 1;
    } else {
        count[nums[i]] = 1;
    }
    }
    console.log(count)
for (const property in count) {
    console.log(property)
    total += ((count[property])*(count[property]-1))/2
}
return total;

};

numIdenticalPairs([1,2,3,4,2,1,4])