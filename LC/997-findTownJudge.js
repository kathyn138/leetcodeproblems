/*
997. Find the Town Judge

In a town, there are N people labelled from 1 to N.  
There is a rumor that one of these people is secretly 
the town judge.

If the town judge exists, then:

- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] 
representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the 
label of the town judge.  Otherwise, return -1.

 

Example 1:
Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 

Constraints:
* 1 <= N <= 1000
* 0 <= trust.length <= 10^4
* trust[i].length == 2
* trust[i] are all different
* trust[i][0] != trust[i][1]
* 1 <= trust[i][0], trust[i][1] <= N
*/

var findJudge = function(N, trust) {
  if (trust.length < N - 1) return -1; 
  
  // judge is in every 1 position and will never be in 0 position
  // can have multiple trust bonds
  
  // first need to make adjacency list
  // judge will be in every set and not exist in the object itself 
  
  let tracker = {};
  
  for (let i = 0; i < trust.length; i++) {
    let curr = trust[i][0];
    
    if (tracker[curr]) {
      if (!tracker[curr].has(trust[i][1])) {
        tracker[curr].add(trust[i][1]);
      }
    } else {
      let adj = new Set();
      adj.add(trust[i][1]);
      tracker[curr] = adj;
    }
  }
  
  let uniqueNum = 0;
  // find number that's not in tracker
  for (let i = 1; i <= N; i++) {
    if (!tracker[i]) uniqueNum = i;
  }
  
  if (!uniqueNum) return -1; 
  
  // make sure it's in every set
  for (let i = 1; i <= N; i++) {
    if (tracker[i]) {
      if (!tracker[i].has(uniqueNum)) return -1; 
    }
  }
  
  return uniqueNum; 
};