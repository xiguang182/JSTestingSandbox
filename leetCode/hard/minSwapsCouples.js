// https://leetcode.com/problems/couples-holding-hands/description/

//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
	beforeEach(done => {
		done();
	});
	describe('Test 1', () => {
		it('test item 1', function(done) {
			let minSwapsCouples = function(row) {
				let counter = 0;
				let len = row.length;
				let findPartner = function(num){
					if(num % 2){
						return num - 1;
					} else {
						return num + 1;
					}
				}
				let newRow = [];
				for(let i = 0; i< len; i+=2){
					if(Math.floor(row[i]/2) !== Math.floor(row[i+1]/2)){
						newRow.push(row[i], row[i+1]);
					} else {
						counter++;
					}
				}
				len = newRow.length;
				let c1,c2;
				let newRow2 = [];
				for(let i= 0; i<len; i+=2){
					if(newRow[i]===false){
						continue;
					}
					let flag = true;
					c1 = findPartner(newRow[i]);
					c2 = findPartner(newRow[i+1]);
					for(let j=i+2; j<len;j+=2){
						if((newRow[j] === c1 && newRow[j+1] === c2) || (newRow[j] === c2 && newRow[j+1] === c1)){
							counter++;
							flag = false;
							newRow[j] = false;
							break;
						}
					}
					if(flag){
						newRow2.push(newRow[i], newRow[i+1]);
					}
				}
				len = newRow2.length;
				console.log(newRow2)

				let extractCircle = function(arr){
					let arrLen = arr.length;
					let tmp = findPartner(arr[0]);
					let tmpIndex;
					arr[0]= false;
					
					while(tmp !== arr[1]){
						for(let i = 2; i< arrLen; i++){
							if(arr[i] === tmp){
								tmpIndex = findPartner(i);
								tmp = findPartner(arr[tmpIndex]);
								arr[tmpIndex] = false;
								arr[i] = false;
								break;
							}
						}
						// console.log(tmp)
					}
					arr[1] = false;
					let newArr = [];
					for(let i = 2; i<arrLen;i+=2){
						if(arr[i] === false){
							continue;
						} else {
							newArr.push(arr[i], arr[i+1]);
						}
					}
					return newArr;
				}
				while(newRow2.length > 0){
					newRow2 = extractCircle(newRow2);
					counter++;
					console.log(newRow2.length)
				}
				console.log(row)
				return row.length / 2 - counter;
			};
			// without arr filter;
			let minSwapsCouples2 = function(row) {
				let counter = 0;
				let len = row.length;
				let findPartner = function(num){
					if(num % 2){
						return num - 1;
					} else {
						return num + 1;
					}
				}
				for(let i = 0; i< len; i+=2){
					if(row[i+1] === findPartner(row[i])){
						counter++;
						continue;
					}
					if(row[i]===false){
						continue;
					}
					let tmp = findPartner(row[i]);
					// row[i] = false;
					console.log(row, row[i])
					while(tmp !== row[i+1]){
						for(let j = i + 2; j < len; j++){
							if(row[j] === tmp){
								tmpIndex = findPartner(j);
								tmp = findPartner(row[tmpIndex]);
								row[tmpIndex] = false;
								row[j] = false;
								break;
							}
						}
					}
					counter++;
				}
				return row.length / 2 - counter;
			};
			// remove 2nd filter
			let minSwapsCouples3 = function(row) {
				let counter = 0;
				let len = row.length;
				let findPartner = function(num){
					if(num % 2){
						return num - 1;
					} else {
						return num + 1;
					}
				}
				let newRow = [];
				for(let i = 0; i< len; i+=2){
					if(row[i] !== findPartner(row[i+1])){
						newRow.push(row[i], row[i+1]);
					} else {
						counter++;
					}
				}
				len = newRow.length;

				let extractCircle = function(arr){
					let arrLen = arr.length;
					let tmp = findPartner(arr[0]);
					let tmpIndex;
					arr[0]= false;
					
					while(tmp !== arr[1]){
						for(let i = 2; i< arrLen; i++){
							if(arr[i] === tmp){
								tmpIndex = findPartner(i);
								tmp = findPartner(arr[tmpIndex]);
								arr[tmpIndex] = false;
								arr[i] = false;
								break;
							}
						}
						// console.log(tmp)
					}
					arr[1] = false;
					let newArr = [];
					for(let i = 2; i<arrLen;i+=2){
						if(arr[i] === false){
							continue;
						} else {
							newArr.push(arr[i], arr[i+1]);
						}
					}
					return newArr;
				}
				while(newRow.length > 0){
					newRow = extractCircle(newRow);
					counter++;
				}
				return row.length / 2 - counter;
			};
			let minSwapsCouples4 = function(row) {
				let counter = 0;
				let len = row.length;
				let indexArr = [];
				for(let i = 0;i<len;i++){
					indexArr[row[i]]=i;
				}
				for(i = 0;i < len ;i +=2 ){
					let tmp = 1^row[i+1];
					if(row[i]!==tmp){
						row[indexArr[tmp]] = row[i];
						indexArr[row[i]] = indexArr[tmp];
						counter++;
					}
				}
				return counter;
			}
			console.log(minSwapsCouples4([5,4,2,6,3,1,0,7]))
			done()
		})
	});
});