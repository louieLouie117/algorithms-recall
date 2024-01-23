function spiralTraverseS1(array) {
    // Write your code here.
    console.log(array)
    resultsArray = [];
    // Initialize the starting and ending row and column indices
    let startRow = 0;
    let endRow = array.length - 1;
    
    let startCol = 0;
    let endCol = array[0].length - 1;
    
    console.log("paramiters", "startRow",startRow, "endRow", endRow);
    console.log("paramiters",  "startCol", startCol,"endCol",endCol);
  
  // Continue the loop as long as the starting row and column indices are less than or equal to the ending row and column indices
   while (startRow <= endRow && startCol <= endCol) {
          console.log("loop is running!")
      
          // Traverse from the starting column to the ending column of the starting row
          for (let col = startCol; col <= endCol; col++) {
              resultsArray.push(array[startRow][col]);
          }
  
          // Traverse from the row next to the starting row to the row before the ending row of the ending column
         for (let row = startRow + 1; row <= endRow -1; row++) {
              resultsArray.push(array[row][endCol]);
          }
  
          // Traverse from the ending column to the starting column of the ending row
          for (let col = endCol; col >= startCol; col--) {
            // Break the loop if the starting row index is equal to the ending row index to avoid duplicates
            if(startRow === endRow) break;
               if(startRow === endRow) break;
              resultsArray.push(array[endRow][col]);
          }
           // Traverse from the row before the ending row to the row next to the starting row of the starting column
          for (let row = endRow - 1; row  >= startRow + 1 ; row--) {
             // Break the loop if the starting column index is equal to the ending column index to avoid duplicates
                if(startCol === endCol) break;
                resultsArray.push(array[row][startCol]);
          }
   
           // Update the starting and ending row and column indices for the next spiral loop
          startRow += 1;
          endRow -= 1;
      
          startCol += 1;
          endCol -= 1;
          
        } 
        
// Log and Return the result array
        console.log("Result Array", resultsArray)
        return resultsArray;
    
  }
  