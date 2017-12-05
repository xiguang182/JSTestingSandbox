//requires mocha.js installed locally or globally
const curryingModel = require('./modules/curriedFunction')
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      console.log(curryingModel.add(1,2))
      console.log(curryingModel.curryAdd(1)(2))
      done()
    })
    
    it('test item 1', function(done) {
      console.log('5,15',curryingModel.optionalCurryAdd(5)(15))
      console.log('15,5',curryingModel.optionalCurryAdd(15)(5))
      done()
    })
  });
});