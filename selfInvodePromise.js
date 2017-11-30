//requires mocha
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });

  describe('Test 1', () => {
    it('self invoke promise test', function(done) {
      let selfInvodePromise = (count, max)=>{
        return new Promise ((suc, err)=>{
          console.log("looping", count)
          count++
          suc({count,max})
        }).then(ret =>{
          if(ret.count < ret.max){
            return selfInvodePromise(ret.count, ret.max);
          }else{
            return "all done"
          }
        })
      }
      selfInvodePromise(0, 20).then(ret => {
        console.log(ret)
      })
      console.log("finish")
      done();
    })

    it('self invoke promise test 2: loop given array', function(done) {
      let selfInvodePromise = (array, index = 0)=>{
        return new Promise ((suc, err)=>{
          console.log("looping", index, "value", array[index])
          index++
          suc({index,array})
        }).then(ret =>{
          if(ret.index < ret.array.length){
            return selfInvodePromise(ret.array,ret.index);
          }else{
            return "all done"
          }
        })
      }
      selfInvodePromise([0, 10, 20]).then(ret => {
        console.log(ret)
        console.log("finish")
        done();
      })
    })
  });
});