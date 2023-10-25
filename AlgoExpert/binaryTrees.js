// ------------------------------Branch Sum------------------------------
/*Write a function that takes in a Binary Tree
 and returns a list of its branch sums ordered 
 from leftmost branch sum to rightmost branch sum. 
 A branch sum is the sum of all values in a Binary 
 Tree branch. A Binary Tree branch is a path of nodes 
 in a tree that starts at the root node and ends at any 
 leaf node. Each Binary Tree node has an integer value, 
 a left child node, and a right child node. Children 
 nodes can either be BinaryTree nodes themselves or 
 None/null. */

 //Soution 1 -------------------------------
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    let sums = [];
    calBranchSums(root, 0, sums);
    return sums;
    
  }
  
  const calBranchSums = (node, runningSum, sums) => {
    console.log("Recursive function was called",  "node:", node, "running sum:",runningSum, "sums:", sums)
    if(node === null){
      return 
    }
      let newRunningSum = runningSum + node.value;
      if(node.left === null && node.right === null){
        sums.push(newRunningSum);
      }
    calBranchSums(node.left, newRunningSum, sums);
    calBranchSums(node.right, newRunningSum, sums);
    
    
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  