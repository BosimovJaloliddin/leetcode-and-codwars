// leetcode => 1637. Widest Vertical Area Between Two Points Containing No Points
// link => https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

// ==============================================================================
// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.
// Input: points = [[8,7],[9,9],[7,4],[9,7]]
// Output: 1
// Explanation: Both the red and the blue area are optimal.
// Example 2:

// Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
// Output: 3
// ==============================================================================
// ===============easy

var maxWidthOfVerticalArea = function (points) {
  let res = 0;
  let arr = points.map((val) => val[0]).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > res) {
      res = arr[i + 1] - arr[i];
    }
  }
  return res;
};
