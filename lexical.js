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
      let user1 = new User("John1");
      user.sayHi(); // the method code has access to the outer "name"
      user1.sayHi();
      console.log(User.environment)
      done()
    })
  });
});