//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('Immediately Invoked Function Expression', function(done) {
      let something;
      (function(){
        let something = "within IIFE"
        console.log("show something: ", something)
      })();
      console.log(eval("if(something===undefined){ undefined}"), "should be undefined")
      done()
    })
  });
});