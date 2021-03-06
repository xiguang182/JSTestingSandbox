//requires mocha.js installed locally or globally

console.log(this === global)
let message = "root"
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  
  let message = "Test function"
  describe('Test 1', () => {
    it('this test', function(done) {
      let message = "thisTest function"
      function whatsThis() {
        let message = "whatsThis Function"
        return this.message;  // The value of this is dependent on how the function is called
      }
      let obj = {
        message: "obj Object"
      }
      let objAlt = {
        message: "objAlt Object"
      }
      let msg = whatsThis();
      console.log("whatsThis() is: ", msg);
      console.log("whatsThis.apply(this) is: ",whatsThis.apply(obj));
      function logThis(){
        console.log('arguments',arguments)
        console.log("Object.keys(this) is: ", Object.keys(this));
        // console.log("this.test is: ", this.test);
        // console.log("this._runnable is: ", this._runnable);
      }

      logThis();
      logThis.apply(whatsThis);
      logThis.apply(obj,[1,2,3,4,5])
      logThis.call(objAlt,...[6,7,8,9,10])
      console.log(this === global)
      done()
    })
  });
});