/**
 * Non-Constructible Change
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
For example, if you're given `coins = [1, 2, 5]`, the minimum amount of change that you can't create is `4`. If you're given no coins, the minimum amount of change that you can't create is `1`.

 */  

// Solution 1
// O(nlogn) time | O(1) space
function nonConstructibleChangeS1(coins) {
    // Sort the coins in ascending order
    coins.sort((a,b) =>a-b)
    // Initialize the change amount to 0
    let changeAmount = 0;
    
    // Loop through each coin
    for (let index = 0; index < coins.length; index++) {
        // If the current coin is greater than the change amount plus 1
        if (coins[index] > changeAmount + 1  ) {
            // Return the change amount plus 1, as this is the smallest amount of change that cannot be created
            return changeAmount + 1;
        } else {
            // If the current coin is not greater than the change amount plus 1, add it to the change amount
            changeAmount += coins[index];
        }
    }
    
    // If all coins have been processed and no unconstructible change amount has been found, return the change amount plus 1
    return changeAmount + 1;
}

// Solution 2
// O(nlogn) time | O(1) space
function nonConstructibleChangeS2(coins) {
    // Sort the coins in ascending order
    coins.sort((a,b) =>a-b)
    // Initialize the change amount to 0
    let changeAmount = 0;
  
    // Loop through each coin
    for (let coin of coins) {
        // If the current coin is greater than the change amount plus 1
        if (coin > changeAmount + 1  ) {
            // Return the change amount plus 1, as this is the smallest amount of change that cannot be created
            return changeAmount + 1;
        } else {
            // If the current coin is not greater than the change amount plus 1, add it to the change amount
            changeAmount += coin;
        }
    }
    
    // If all coins have been processed and no unconstructible change amount has been found, return the change amount plus 1
    return changeAmount + 1;
}

