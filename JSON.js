//requires mocha.js installed locally or globally
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      let testObj ={
        key1: 'value1',
        key2: 'value2',
        Obj2: {
          key3: 'value3',
        }
      }
      let testObj2 ={
        key1: 'value1',
        key2: 'value2',
        Obj2: {
          key3: 'value3',
          toJSON(){
            return 'value4'
          }
        }
      }
      console.log(JSON.stringify(testObj))
      console.log(JSON.stringify(testObj,null,2))
      console.log(JSON.stringify(testObj2,null,4))
      console.log(JSON.stringify(testObj,['key1','key2'],4))


      console.log(JSON.parse(JSON.stringify(testObj)).key1);
      console.log(JSON.parse(JSON.stringify(testObj), (key,val)=>{
        if(key == "key1"){
          return "Jackpot"
        }
        return val;
      }).key1)
      done()
    })
  });
});