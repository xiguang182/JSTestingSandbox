/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    if(nums.length === 1){
		if(Math.round((nums[0]-24) *100000) === 0){
			return true;
		} else {
			return false;
		}
	}
	for(let i = 0; i< nums.length; i++){
		for(let j = 0; j< nums.length; j++){
			if(j!==i){
				let nums2 = [];
				for(let k = 0; k < nums.length;k++){
					if(k !== i && k !== j){
						nums2.push(nums[k]);
					}
				}
				for(let l = 0; l < 4;l++){
					let product;
					if(l === 0){
						product = nums[i] + nums[j];
					}
					if(l === 1){
						product = nums[i] - nums[j];
					}
					if(l === 2){
						product = nums[i] * nums[j];
					}
					if(l === 3){
						product = nums[i] / nums[j];
					}
					nums2.push(product);
					if(judgePoint24(nums2)){
						return true;
					} else {
						nums2.pop();
					}
				}
			}
		}
	}
	return false;
};

var judgePoint24 = function(nums) {
	if(nums.length === 1){
		if(Math.round((nums[0]-24) *100000) === 0){
			return true;
		} else {
			return false;
		}
	}
	for(let i = 0; i< nums.length; i++){
		for(let j = i+1; j< nums.length; j++){
			let nums2 = [];
			for(let k = 0; k < nums.length;k++){
				if(k !== i && k !== j){
					nums2.push(nums[k]);
				}
			}
			let product;
			product = nums[i] + nums[j];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
			product = nums[i] - nums[j];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
			product = nums[j] - nums[i];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
			product = nums[i] * nums[j];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
			product = nums[i] / nums[j];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
			product = nums[j] / nums[i];
			nums2.push(product);
			if(judgePoint24(nums2)){
				return true;
			} else {
				nums2.pop();
			}
		}
	}
	return false;
};