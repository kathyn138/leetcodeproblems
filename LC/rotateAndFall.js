let box1 = [['#', '#', '.', '.', '.', '.', '.'],
            ['#', '#', '#', '.', '.', '.', '.'],
            ['#', '#', '#', '.', '.', '#', '.']];

let box2 = [['#', '#', '.', '.', '.', '#', '.'],
            ['#', '#', '#', '.', '.', '*', '.'],
            ['#', '#', '#', '*', '.', '#', '.']];

// obstacles * don't move
// want to first move boxes to next empty place
function rotateAndFall(box) {
  // rotate the box
  for (let i = 0; i < box.length; i++) {
    let emptyCell = box[i].length - 1; 
    let n = box[i].length - 2; 
    
    // going backwards is easier than going forwards
    // ensures that we don't miss boxes
    // and ensures that we stop at obstacles
    for (let j = n; j > - 1; j--) {
      if (box[i][j] === '#') {
        box[i][j] = '.';
        box[i][emptyCell] = '#';
        emptyCell--;  
      } else if (box[i][j] === '*') {
        emptyCell = j - 1;
      }
    }
  }

  let rotatedBox = [];

  for (let i = 0; i < box[0].length; i++) {
    let tempNewRow = [];
    // start at the end
    // we want the bottom of box to be first row in rotatedBox
    for (let j = box.length - 1; j > -1; j--) {
        tempNewRow.push(box[j][i]);
      }
      rotatedBox.push(tempNewRow);
  }
  
  return rotatedBox;
}

// console.log(rotateAndFall(box1))
console.log(rotateAndFall(box2))

