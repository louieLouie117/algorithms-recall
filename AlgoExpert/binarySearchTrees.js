
// Find the closest value in BST
/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST. 
  You can assume that there will only be one closest value.  

  Each BST node has an integer value, a left child node, and a right child node. 
  A node is said to be a valid BST node if and only if it satisfies the BST property:
  its value is strictly greater than the values of every node to its left, its value is 
  less than or equal to the values of every node to its right, and its children nodes 
  are either valid BST nodes themselves or None/null.
  
  */

// Solution 1 ---------------------- iterative approach
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closest = Infinity;
  console.log(closest);

  while (currentNode !== null) {
    console.log("loop is running!")
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;      
    }
    if(target < currentNode.value){
      currentNode = currentNode.left;
    }
    else if(target > currentNode.value){
      currentNode = currentNode.right;
    }
    else{
      break;
    }
    

  }
    console.log("loop stopped!", closest)
    return closest
  
}

// Solution 2 ------------------------------------- Recoursively
function findClosestValueInBst(tree, target) {
  // Write your code here.
    return findClosestValueInBstHelper(tree, target, Infinity);

}
// This is a helper function that implements recursion
function findClosestValueInBstHelper(currentNode, target, closest) {
  // Base case: if the current node is null, return the closest value
  if (currentNode === null) {
    return closest;
  }
  // Recursive case: update the closest value if needed and move to the left or right subtree
  if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
    closest = currentNode.value;
  }
  if (target < currentNode.value) {
    return findClosestValueInBstHelper(currentNode.left, target, closest);
  } else if (target > currentNode.value) {
    return findClosestValueInBstHelper(currentNode.right, target, closest);
  } else {
    return closest;
  }
}