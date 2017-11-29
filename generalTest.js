//requires mocha.js installed local or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });

  describe('Test 1', () => {
    it('this test', function(done) {
      function whatsThis() {
        return this;  // The value of this is dependent on how the function is called
      }
      let obj = {
        a: "text"
      }
      console.log(whatsThis.apply(this))
      done()
    })
  });
});