//requires mocha.js installed locally or globally
const binaryTree = require('./modules/binaryTree');
describe('Test - Initializing', () => {
    beforeEach(done => {
        done();
    });
    describe('Test 1', () => {
        it('test item 1', function(done) {
            let rootNode = new binaryTree.BinaryNode('Grand Final');

            let teamA = new binaryTree.EndPoint('teamA');
            let teamB = new binaryTree.EndPoint('TeamB');
            let teamC = new binaryTree.EndPoint('TeamC');
            let teamD = new binaryTree.EndPoint('TeamD');

            let semiA = rootNode.insertNode('Semi Final A');
            semiA.replaceEndPoint(teamA);
            semiA.replaceEndPoint(teamB, false);
            semiA.nodeSwitch = -1;

            let extraMatch = rootNode.insertNode('extra match');
            extraMatch.replaceEndPoint(teamD, false);

            let semiB = rootNode.insertNode('Semi Final B', false);
            semiB.replaceEndPoint(teamC);
            semiB.replaceEndPoint(semiA, false);
            semiB.specialRightChild = true;
            semiB.nodeSwitch = 1;

            rootNode.iterateSubTree(binaryTree.BinaryNode.printNode);
            done()
        })
    });
});