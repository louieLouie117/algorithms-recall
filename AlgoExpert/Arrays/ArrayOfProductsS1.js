/**
 * Array Of Products ⭐
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

In other words, the value at `output[i]` is equal to the product of every number in the input array other than `input[i]`.

Note that you're expected to solve this problem without using division.

 */



// Define a function that takes an array as a parameter
function arrayOfProducts(array) {
    // Declare an empty array to store the products
    let products = [];
    // Log the input array to the console
    console.log(array)
    // Loop through the input array using its length
    for(let i = 0; i < array.length; i++){
      // Declare a variable to store the current product
      let currentProduct = 1;
      // Loop through the input array again
      for (let j = 0; j < array.length; j++) { 
          // Check if the indexes are different
          if (j != i) {
            // Log the current pair of elements to the console
            console.log("found", array[i], array[j])
            // Multiply the current product by the element at index j
            currentProduct *= array[j];
          }
      }
      // Push the current product to the products array
      products.push(currentProduct)
    }
    // Log the products array to the console
    console.log("results",products)
    // Return the products array as the output of the function
    return products   
  }

  // Sutions 2 with arry fill
  // O(n) time | O(n) space
function arrayOfProducts(array) {
  // Create an array of the same length as the input array and fill it with 1
  const products = new Array(array.length).fill(1);
  // Create two more arrays to store the left and right products
  const leftProducts = new Array(array.length).fill(1);
  const rightProducts = new Array(array.length).fill(1);

  // Declare a variable to store the running product from the left
  let leftRunningProduct = 1;
  // Loop through the input array from the left
  for (let i = 0; i < array.length; i++) {
      // Assign the running product to the left products array at the current index
      leftProducts[i] = leftRunningProduct;
      // Update the running product by multiplying it by the current element
      leftRunningProduct *= array[i];
  }

  // Declare a variable to store the running product from the right
  let rightRunningProduct = 1;
  // Loop through the input array from the right
  for (let i = array.length -1; i >= 0; i--) {
      // Assign the running product to the right products array at the current index
      rightProducts[i] = rightRunningProduct;
      // Update the running product by multiplying it by the current element
      rightRunningProduct *= array[i];
  }

  // Loop through the input array again
  for (let i = 0; i < array.length; i++) {
      // Multiply the left and right products at the current index and assign it to the products array
      products[i] = leftProducts[i] * rightProducts[i];
  }

  // Return the products array as the output of the function
console.log(products)
  return products;
}



