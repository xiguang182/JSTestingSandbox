// https://leetcode.com/problems/most-profit-assigning-work/description/
//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
	beforeEach(done => {
		done();
	});
	describe('Test 1', () => {
		it('test item 1', function(done) {
			let maxProfitAssignment = function(difficulty, profit, worker) {
				let sum = 0;
				if(difficulty.length * worker.length < 100000){
					for(let i = 0; i < worker.length; i++){
						let maxProfit = 0;
						for(let j = 0; j < difficulty.length; j++){
							if(difficulty[j] <= worker[i]){
								if(maxProfit < profit[j]){
									maxProfit = profit[j];
								}
							}
						}
						sum += maxProfit;
					}
				} else {
					let profitMap = new Array(100000);
					profitMap.fill(0);
					for(let i = 0;i < difficulty.length;i++){
						if(profitMap[difficulty[i]] < profit[i]){
							profitMap[difficulty[i]] = profit[i];
						}
					}
					let profitDifficultyMap = new Array(100000);
					profitDifficultyMap.fill(0);
					profitDifficultyMap[0] = profitMap[0];
					for(let i = 1; i < profitMap.length; i++){
						if(profitMap[i]> profitDifficultyMap[i]){
							profitDifficultyMap[i] = profitMap[i];
						}
						if(profitDifficultyMap[i-1]> profitDifficultyMap[i]){
							profitDifficultyMap[i] = profitDifficultyMap[i-1];
						}
					}

					for(let i = 0; i< worker.length; i++){
						sum+= profitDifficultyMap[worker[i]];
					}

				}
				return sum;
			};
			done()
		})
	});
});
