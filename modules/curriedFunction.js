// to do curried functions and point free functions

// basic example

function add(x, y) {
  return x + y;
}

function curryAdd(x) {
  return function (y){
    return x + y;
  }
}

// experimental function
function optionalCurryAdd(x){
  if(x > 10){
    // TypeError: curryingModel.optionalCurryAdd(...) is not a function
    // return x;
    // sequencially call has to be there
    return () => x;
  } else {
    return function (y){
      return x + y;
    }
  }
}

exports.add = add;
exports.curryAdd = curryAdd;
exports.optionalCurryAdd = optionalCurryAdd;