//requires mocha
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });

  describe('Test 1', () => {
    it('self invoke promise test', function(done) {
      let selfInvodePromise = (count)=>{
        return new Promise ((suc, err)=>{
          if(count < 10){
            console.log("looping", count)
            count++
            suc(count)
          } else {
            suc(10)
          }
        }).then(ret =>{
          if(ret < 10){
            return selfInvodePromise(ret);
          }else{
            return "all done"
          }
        })
      }
      selfInvodePromise(0).then(ret => {
        console.log(ret)
        done();
      })
    })
  });
});