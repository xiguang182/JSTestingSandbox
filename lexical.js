//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      // constructor function returns a new object
      function User(name) {
        console.log(arguments)
        
        // the object method is created as a nested function
        //A Lexical Environment object dies when it becomes unreachable. That is: when no nested functions remain that reference it.
        this.sayHi = function() {
          console.log(name);
        };
      }
      let user = new User("John");
      user.sayHi(); // the method code has access to the outer "name"
      done()
    })
  });
  describe('Test 2', () => {
    it('test item 1', function(done) {
      const arr = [1,2,3,4];
      for(var i = 0; i < arr.length; i++){ // var not let
        console.log(i, arr[i]);
        setTimeout(()=>{
          console.log('timeout: ', i, arr[i])
        }, 1000);
      }
      done()
    })
  });
});