//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      let shortestToChar = function(S, C) {
        let distance = Infinity;
        let distanceArr = [];
        for(let i = 0;i<S.length;i++){
          if(S[i] === C){
            distance = 0;
            distanceArr.push(distance);
            if(i === 0){
              continue;
            }
            for(let j = 1;j <= i ;j++){
              console.log(i,j,distanceArr, distanceArr[i-j], j)
              if(distanceArr[i-j] > j){
                distanceArr[i-j] = j;
              } else {
                break;
              }
            }
          } else {
            distanceArr.push(++distance);
          }
        }
        return distanceArr;
      };
      console.log(shortestToChar("abcddcba",'c'));
      done()
    })
  });
});