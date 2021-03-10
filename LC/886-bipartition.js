/*
886. Possible Bipartition

Given a set of N people (numbered 1, 2, ..., N), we would 
like to split everyone into two groups of any size.

Each person may dislike some other people, and they should 
not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed 
to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone 
into two groups in this way.

 

Example 1:
Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]

Example 2:
Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false

Example 3:
Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false

Note:

1 <= N <= 2000
0 <= dislikes.length <= 10000
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
There does not exist i != j for which dislikes[i] == dislikes[j].
*/

function createGraph(dislikes) {
  let graph = {};

  for (let i = 0; i < dislikes.length; i++) {
    let nodeA = { val: dislikes[i][0], color: null, dislikes: [] };
    let nodeB = { val: dislikes[i][1], color: null, dislikes: [] };

    if (graph[dislikes[i][0]]) {
      nodeA = graph[dislikes[i][0]];
    } else {
      graph[dislikes[i][0]] = nodeA;
    }

    if (graph[dislikes[i][1]]) {
      nodeB = graph[dislikes[i][1]];
    } else {
      graph[dislikes[i][1]] = nodeB;
    }

    nodeA.dislikes.push(nodeB);
    nodeB.dislikes.push(nodeA);
  }

  return graph;
}

var possibleBipartition = function (N, dislikes) {
  if (!dislikes.length) return true;

  let graph = createGraph(dislikes);
  let queue = [];
  let idx = 0;

  // first color
  graph[dislikes[0][0]].color = 'red';
  queue.push(graph[dislikes[0][0]]);

  while (queue.length) {
    let currNode = queue.shift();

    // BFS
    // go through and assign colors to assign groups
    // conflict arises when two values are in same group 
    // but dislike each other
    // eg [[1,2],[1,3],[2,3]]
    // initial assignment: 1 is red, 2 is blue, 1 is red, 3 is blue 
    // conflict at [2, 3] where 2 and 3 are both blue 
    // return false 

    for (let i = 0; i < currNode.dislikes.length; i++) {
      if (currNode.dislikes[i].color
        && currNode.dislikes[i].color === currNode.color) {
        return false;
      }

      else if (!currNode.dislikes[i].color) {
        // want adjacent node to have opposite color than currNode color
        let newColor = currNode.color === 'red' ? 'blue' : 'red';
        currNode.dislikes[i].color = newColor;
        queue.push(currNode.dislikes[i]);
      }
    }

    // need to account for when currNode only has 1 dislike 
    // and that 1 dislike only points back to currNode
    // eg [[1,2],[3,4],[4,5],[3,5]]
    // without this, it'll stop at [1, 2] 
    // and not go through entire dislikes array
    // remember to set idx outside of while loop
    // to have it properly increment
    if (!queue.length && idx + 1 < dislikes.length) {
      idx = idx + 1;
      graph[dislikes[idx][0]].color = graph[dislikes[idx][0]].color || 'red';
      queue.push(graph[dislikes[idx][0]]);
    }

  }

  return true;
};

// true
console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]))