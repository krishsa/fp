let root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
let root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {   
    let getLeaf = r => {
        let stack=[];
        let seq = [];
        stack.push(r);
        while(stack.length != 0){
            let currentNode = stack.pop();
            if(currentNode.right != null) stack.push(currentNode.right)
            if(currentNode.left != null) stack.push(currentNode.left)
            if(currentNode.left === null && currentNode.right === null){
                seq.push(currentNode.val);
            }
        }
        return seq;
    }
    let seq1 = getLeaf(root2);
    let seq2 = getLeaf(root1);
    return seq1.length === seq2.length && seq2.every((v, i) => v === seq1[i]);
     
};