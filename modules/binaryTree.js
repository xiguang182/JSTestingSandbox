class BinaryNode{
  constructor(name, payload = null){
    this.parentNode = null;
    this.name = name;
    this.leftChild = null;
    this.rightChild = null;
    this.payload = payload;
    this.altered = false;
    this.switch = null;
    this.specialChild = null;
    // console.log(BinaryNode.prototype)
    // BinaryNode.prototype.toString = function nodeToString() {
    //   return this.name;
    // }
  }
  get BasicInfo(){
    return `Name: ${this.name}, Parent: ${this.parentNode}, leftChild: ${this.leftChild}, rightChild: ${this.rightChild}`;
  }
  get Root(){
    if(this.parentNode instanceof BinaryNode){
      return this.parentNode.Root;
    } else {
      return this;
    }
  }

  set Payload(payload){
    if(payload !== this.payload){
      this.payload = payload;
      this.altered = true;
    }
  }

  printSubTree(){
    if(this.leftChild instanceof BinaryNode){
      this.leftChild.printSubTree();
    }
    console.log(this.BasicInfo, '\n Ascendant:' + this.controlSwitch());
    if(this.rightChild instanceof BinaryNode){
      this.rightChild.printSubTree();
    }
  }

  binaryTreeToArray(arr = [], nodeIndex = 1){
    arr[nodeIndex] = this.name;
    if(this.leftChild instanceof BinaryNode){
      this.leftChild.binaryTreeToArray(arr, nodeIndex*2);
    }
    if(this.rightChild instanceof BinaryNode){
      this.rightChild.binaryTreeToArray(arr, nodeIndex*2 +1);
    }
    return arr;
  }

  searchName(name){
    if(this.name === name)
      return this;
    let leftName, rightName;
    if(this.leftChild !== null){
      leftName = this.leftChild.searchName(name);
    }
    if(this.rightChild !== null){
      rightName = this.rightChild.searchName(name);
    }
    if(leftName){
      return leftName;
    }
    if(rightName){
      return rightName;
    }
    return null;
  }

  controlSwitch(){
    if(this.switch === null){
      return 'winner of ' + this;
    } else if(this.switch === -1){
      if(this.leftChild instanceof BinaryNode){
        return this.leftChild.controlSwitch();
      } else{
        return this.leftChild;
      }
    } else if(this.switch === 1){
      if(this.rightChild instanceof BinaryNode){
        return this.rightChild.controlSwitch();
      } else {
        return this.rightChild;
      }
    }
  }
}

class EndPoint{
  constructor(name, payload = null){
    this.name = name;
    this.payload = payload;
  }
}

BinaryNode.prototype.toString = function nodeToString() {
  return 'node:' + this.name;
}

EndPoint.prototype.toString = function nodeToString() {
  return 'End point:' + this.name;
}

// let test = new BinaryNode('test');
// console.log(test.toString());

exports.BinaryNode = BinaryNode;
exports.EndPoint = EndPoint;