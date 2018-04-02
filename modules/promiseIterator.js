exports.promiseIterator = function promiseIterator(array, fn, index = 0){
  return Promise.resolve(fn(array, index)) // promisify sync function 
  .then(() =>{
    index++;
    if(index < array.length){
      return promiseIterator(array, fn, index);
    }else{
      return array
    }
  })
}