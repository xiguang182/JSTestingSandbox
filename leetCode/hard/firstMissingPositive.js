// https://leetcode.com/problems/first-missing-positive/

//requires mocha.js installed locally or globally

describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      /**
       * solution 1, non constant extra space leetCode result 56ms 
       * @param {*} nums 
       */
      let firstMissingPositive = function(nums) {
        let positions = [];
        for(let i = 0; i< nums.length;i++){
            positions[nums[i]] = true;
        }
        for(let i = 1; i<= nums.length;i++){
          if(positions[i] != true){
            return i;
          }
        }
        return nums.length +1;
      };
      let firstMissing = function(nums){
        let len = nums.length;
        let swap = function(newNum){
          let tmp = nums[newNum-1];
          nums[newNum-1]= newNum;
          if(tmp<1 || tmp>len){
            return;
          } else if(nums[tmp-1] === tmp) {
            return;
          } else {
            console.log(nums, tmp)
            swap(tmp);
          }
  
        }
        for(let i = 0;i < len; i++){
          console.log(nums[i], i+1)
          if(nums[i]<1 || nums[i]>len){
            nums[i] = 0;
          } else if(nums[i] === i+1){
            continue;
          } else if(nums[nums[i]-1] === nums[i]) {
            console.log('f')
            nums[i] = 0;
            continue;
          } else {
            let tmp = nums[i];
            nums[i] = 0;
            swap(tmp);
          }
        }
        console.log(nums)
        for(let i = 0; i<len ;i++){
          if(nums[i]===0){
            return i+1;
          }
        }
        return len+1;
      }
      
      console.log(firstMissing([1,1,1]))
      done()
    })
  });
});