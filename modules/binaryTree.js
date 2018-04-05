class BinaryNode{
  constructor(name, payload = null){
    this.parentNode = null;
    this.name = name;
    this.leftChild = null;
    this.rightChild = null;
    this.payload = payload;
    this.altered = false;
    this.nodeSwitch = null;
    this.specialLeftChild = false;
    this.specialRightChild = false;
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

  // printSubTree(){
  //   if(this.leftChild instanceof BinaryNode){
  //     this.leftChild.printSubTree();
  //   }
  //   console.log(this.BasicInfo, '\n Ascendant:' + this.controlSwitch());
  //   if(this.rightChild instanceof BinaryNode){
  //     this.rightChild.printSubTree();
  //   }
  // }

  static printNode(binaryNode){
    if(binaryNode instanceof BinaryNode){
      console.log(binaryNode.BasicInfo, '\n Ascendant:' + binaryNode.controlSwitch());
    }
  }

  static checkNodeChildren(binaryNode){
    if(binaryNode instanceof BinaryNode){
      if(binaryNode.leftChild === null || binaryNode.rightChild === null){
        return false;
      }
      return true;
    }
  }

  static buildBinaryTree(nodeData, endPoints){
    // let endPoints = [
    //   new binaryTree.EndPoint('Candidate 1'),
    //   new binaryTree.EndPoint('Candidate 2'),
    //   new binaryTree.EndPoint('Candidate 3'),
    //   new binaryTree.EndPoint('Candidate 4'),
    //   new binaryTree.EndPoint('Candidate 5'),
    //   new binaryTree.EndPoint('Candidate 6'),
    // ];

    // let nodeRecords = [
    //   {name:'match 1', parent: null, leftChild:'match 2', rightChild: 'match 3', specialLeftChild: false, specialRightChild: false, leftEndPoint: null, rightEndPoint: null},
    //   {name:'match 2', parent: 'match 1', leftChild: null, rightChild: null, specialLeftChild: false, specialRightChild: false, leftEndPoint: 'Candidate 1', rightEndPoint: 'Candidate 2'},
    //   {name:'match 3', parent: 'match 1', leftChild:'match 2', rightChild: 'match 3', specialLeftChild: false, specialRightChild: false, leftEndPoint: null, rightEndPoint: null},
    //   {name:'match 6', parent: 'match 3', leftChild: null, rightChild: null, specialLeftChild: false, specialRightChild: false, leftEndPoint: 'Candidate 3', rightEndPoint: 'Candidate 4'},
    //   {name:'match 7', parent: 'match 3', leftChild: null, rightChild: null, specialLeftChild: false, specialRightChild: false, leftEndPoint: 'Candidate 5', rightEndPoint: 'Candidate 6'},
    //   // {name:'match 1', parent:null, leftChild:'match 2', rightChild: 'match 3', specialLeftChild: null, specialRightChild: false, leftEndPoint: null, rightEndPoint: null},
    //   // {name:'match 1', parent:null, leftChild:'match 2', rightChild: 'match 3', specialLeftChild: null, specialRightChild: false, leftEndPoint: null, rightEndPoint: null},
    // ];

    let nodeRecords = nodeData;
    // console.log(endPoints, nodeRecords)
    for(let i = 0; i < nodeRecords.length; i++){
      nodeRecords[i] = new BinaryNode(nodeRecords[i].name, nodeRecords[i]);
      nodeRecords[i].specialLeftChild = nodeRecords[i].payload.specialLeftChild;
      nodeRecords[i].specialRightChild = nodeRecords[i].payload.specialRightChild;
    }

    for(let i = 0; i < nodeRecords.length; i++){
      if(nodeRecords[i].payload.parent !== null){
        for(let j = 0; j < nodeRecords.length; j++){
          if(nodeRecords[j].name === nodeRecords[i].payload.parent){
            nodeRecords[i].parentNode = nodeRecords[j];
            break;
          }
        }
      }

      if(nodeRecords[i].payload.leftChild !== null){
        for(let j = 0; j < nodeRecords.length; j++){
          if(nodeRecords[j].name === nodeRecords[i].payload.leftChild){
            nodeRecords[i].leftChild = nodeRecords[j];
            break;
          }
        }
      } else if(nodeRecords[i].payload.leftEndPoint !== null){
        for(let j = 0; j < endPoints.length; j++){
          if(endPoints[j].name === nodeRecords[i].payload.leftEndPoint){
            nodeRecords[i].leftChild = endPoints[j];
            break;
          }
        }
      }

      if(nodeRecords[i].payload.rightChild !== null){
        for(let j = 0; j < nodeRecords.length; j++){
          if(nodeRecords[j].name === nodeRecords[i].payload.rightChild){
            nodeRecords[i].rightChild = nodeRecords[j];
            break;
          }
        }
      } else if(nodeRecords[i].payload.rightEndPoint !== null){
        for(let j = 0; j < endPoints.length; j++){
          if(endPoints[j].name === nodeRecords[i].payload.rightEndPoint){
            nodeRecords[i].rightChild = endPoints[j];
            break;
          }
        }
      }

      nodeRecords[i].payload = null;
    }
    return nodeRecords[0].Root;
  }

  insertNode(left = true){
    if(left){
      this.leftChild = nonExported.insertNewNode(this.leftChild);
      this.leftChild.parentNode = this;
    } else {
      this.rightChild = nonExported.insertNewNode(this.rightChild);
      this.rightChild.parentNode = this;
    }
  }
  dropNode(left = true){

  }

  replaceNode(node, left = true){

  }

  iterateSubTree(fn){
    if(this.leftChild instanceof BinaryNode && !this.specialLeftChild){
      this.leftChild.iterateSubTree(fn);
    }
    // console.log(this.BasicInfo, '\n Ascendant:' + this.controlSwitch());
    fn(this);
    if(this.rightChild instanceof BinaryNode && !this.specialRightChild){
      this.rightChild.iterateSubTree(fn);
    }
  }

  binaryTreeToArray(arr = [], nodeIndex = 1){
    arr[nodeIndex] = this;
    if(this.leftChild instanceof BinaryNode && !this.specialLeftChild){
      this.leftChild.binaryTreeToArray(arr, nodeIndex*2);
    }
    if(this.rightChild instanceof BinaryNode && !this.specialRightChild){
      this.rightChild.binaryTreeToArray(arr, nodeIndex*2 +1);
    }
    return arr;
  }

  searchName(name){
    if(this.name === name)
      return this;
    let leftName, rightName;
    if(this.leftChild !== null && !this.specialLeftChild){
      leftName = this.leftChild.searchName(name);
    }
    if(this.rightChild !== null && !this.specialRightChild){
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


  controlSwitch(reversed = false){
    if(this.nodeSwitch === null){
      if(reversed){
        return 'loser of ' + this;
      } else {
        return 'winner of ' + this;
      }
    } else{
      let nodeSwitch = this.nodeSwitch;
      if(reversed){
        nodeSwitch = -nodeSwitch;
      }
      if(nodeSwitch === -1){
        if(this.leftChild instanceof BinaryNode){
          if(this.specialLeftChild){
            return this.leftChild.controlSwitch(true);
          } else {
            return this.leftChild.controlSwitch();
          }
        } else{
          return this.leftChild;
        }
      } else if(nodeSwitch === 1){
        if(this.rightChild instanceof BinaryNode){
          if(this.specialRightChild){
  
          } else {
            return this.rightChild.controlSwitch();
          }
        } else {
          return this.rightChild;
        }
      }
    } 
  }
}

let nonExported = {
  insertNewNode: (nodeRef, name = 'new node') => {
    if(nodeRef === null){
      return new BinaryNode(name);
    } else {
      let newNode = new BinaryNode(name);
      newNode.leftChild = nodeRef;
      return newNode;
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