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
