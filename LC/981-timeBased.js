
var TimeMap = function() {
  this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  // key can have multiple value timestamp pairs stored as arrays in array
  const map = this.map;
  if (!map.has(key)) map.set(key, []);
  map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  // if exists, return it or else return [];
  const valuesArr = this.map.get(key) || []
  let left = 0;
  let right = valuesArr.length - 1;
  let res = '';
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let [currValue, currTime] = valuesArr[mid];

    // want max prevtime that is <= currtime
    if (timestamp === currTime) return currValue;

    if (timestamp >= currTime) {
      left = mid + 1;
      res = currValue;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */