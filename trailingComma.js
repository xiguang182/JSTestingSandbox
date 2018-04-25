//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      let funcWithDefaultArg = function(param1, param2, param3 = 0){
        console.log(param1,param2, param3);
      } 
      funcWithDefaultArg(
        1,
        2,
      )
      funcWithDefaultArg(3,4,)
      done()
    })
  });
});