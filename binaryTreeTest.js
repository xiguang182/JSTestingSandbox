//requires mocha.js installed locally or globally
const binaryTree = require('./modules/binaryTree');
describe('Test - Initializing', () => {
  beforeEach(done => {
    done();
  });
  describe('Test 1', () => {
    it('test item 1', function(done) {
      let data1 = {
        name: 'first piece',
      }

      let data2 = {
        name: 'second piece',
      }

      let node1 = new binaryTree.BinaryNode('game 1');
      let node2 = new binaryTree.BinaryNode('game 2');
      let node3 = new binaryTree.BinaryNode('game 3');
      node1.leftChild = node2;
      node2.parentNode = node1;
      node1.rightChild = node3;
      node3.parentNode = node1;
      // let node4 = new binaryTree.BinaryNode('game 4');
      // let node5 = new binaryTree.BinaryNode('game 5');
      // node2.leftChild = node4;
      // node4.parentNode = node2;
      // node2.rightChild = node5;
      // node5.parentNode = node2;
      let node6 = new binaryTree.BinaryNode('game 6');
      let node7 = new binaryTree.BinaryNode('game 7', data1);
      node3.leftChild = node6;
      node6.parentNode = node3;
      node3.rightChild = node7;
      node7.parentNode = node3;


      let endPoint1 = new binaryTree.EndPoint('Candidate 1');
      let endPoint2 = new binaryTree.EndPoint('Candidate 2');
      let endPoint3 = new binaryTree.EndPoint('Candidate 3');
      let endPoint4 = new binaryTree.EndPoint('Candidate 4');
      let endPoint5 = new binaryTree.EndPoint('Candidate 5');
      let endPoint6 = new binaryTree.EndPoint('Candidate 6');

      node2.leftChild = endPoint1;
      node2.rightChild = endPoint2;
      node6.leftChild = endPoint3;
      node6.rightChild = endPoint4;
      node7.leftChild = endPoint5;
      node7.rightChild = endPoint6;

      // pull the switches
      // node7.switch = 1;
      // node6.switch = -1;
      // node2.switch = -1;
      // node3.switch = -1;
      // node1.switch = 1;


      node3.Root.printSubTree();
      // console.log(node1.searchName('node3').toString());
      // console.log(node7.altered);
      // data1.name = 'first piece ex';
      // console.log(node7.payload, node7.altered)
      // node7.Payload = data2;
      // console.log(node7.altered);
      console.log(node1.binaryTreeToArray())
      console.log(null instanceof binaryTree.BinaryNode)
      done()
    })
  });
});