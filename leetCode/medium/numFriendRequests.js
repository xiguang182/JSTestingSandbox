// https://leetcode.com/problems/friends-of-appropriate-ages/description/
describe('Test - Initializing', () => {
	beforeEach(done => {
		done();
	});
	describe('Test 1', () => {
		it('test item 1', function(done) {
			let numFriendRequests = function(ages) {
				let numByAge = new Array(121);
				numByAge.fill(0);
				for(let i = 0; i< ages.length; i++){
					numByAge[ages[i]]++;
				}
				let sum = 0;
				let selfRequest = 0;
				for(let i = 1; i < 121; i++){
					for(let j = 1; j< 121; j++){
						if(j > i){
							continue;
						}
						if(j <= 0.5 * i + 7){
							continue;
						} 
						if(j > 100 && i < 100){
							continue;
						}
						if(i === j){
							selfRequest += numByAge[i];
						}
						sum += numByAge[i] * numByAge[j];
					}
				}
				sum-=selfRequest;
				return sum;
			};
			
			console.log(numFriendRequests([16,16]))
			done()
		})
	});
});