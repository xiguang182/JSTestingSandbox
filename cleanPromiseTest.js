const cleanPrmoseModel = require('./modules/cleanPromiseFormat')


describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      cleanPrmoseModel.doTasks().then(ret =>{
        console.log('final task:',ret)
        done();
      }).catch(console.log)
    })
    it('test item 2', function(done) {
      cleanPrmoseModel.doCleanTask().then(ret =>{
        console.log('final task:',ret)
        done();
      }).catch(console.log)
    })
  });
  
});