/**
 * single statement promise chain
 */

// assume we have a prmose like following

function myPromise(){
  return new Promise(function(resolves, reject){
    // do something
    let task = 1;
    console.log('doing task:',task);
    resolves(task);
  }).then(ret =>{
    // do something
    ret++;
    console.log('doing task:',ret);
    return ret;
  }).then(ret =>{
    // do something
    ret++;
    console.log('doing task:',ret);
    return ret;
  }).then(ret =>{
    // do something
    ret++;
    console.log('doing task:',ret);
    return ret;
  }).then(ret =>{
    // do something
    ret++;
    console.log('doing task:',ret);
    return ret;
  })
}

exports.doTasks = ()=>{
  return myPromise()
}

//cleaner version or single statement then block version

const taskHandler = fn => d => {
  d++;
  fn(d)
  return d;
};

function taskHandler2(task){
  task++;
  console.log('doing task:',task)
  return task;
}

// clearer version of taskHandler
function taskHandlerExpanded(fn) {
  return function(d) {
    fn(d);
    return d;
  }
}

function myCleanPromise(){
  return new Promise((resolves) =>{
    // do something
    let task = 1;
    console.log('doing task:',task);
    resolves(task);
  }).then(taskHandler(ret => console.log('doing task:',ret)))
  .then(taskHandler(ret => console.log('doing task:',ret)))
  .then(taskHandler(ret => console.log('doing task:',ret)))
  .then(taskHandler(ret => console.log('doing task:',ret)))
  .then(taskHandler2)
  .then(taskHandler2)
  .then(taskHandler2)
  .then(taskHandler2)
  .then(taskHandler2)
}

exports.doCleanTask = () => myCleanPromise();