// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * Finds the starting and ending position of a target value within a sorted array of integers.
 *
 * @param {number[]} nums - The sorted array of integers to search within.
 * @param {number} target - The target integer to search for.
 * @return {number[]} An array containing the starting and ending position of the target integer in the input array, or [-1, -1] if the target is not found.
 */
function searchRange(nums: number[], target: number): number[] {
    let result : number[] = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i+1]){ {
            return result;
        }
    }
    }

    nums.forEach((num: number, i: number) => {
        if(num === target) {
            if(result[0] === -1){
                result = [i, i];
            }else{
                if(nums[i] === nums[i+1]){
                    result[1] = i+1;
                }
            }
        }

    })

    return result;
}

searchRange([5,7,7,8,8,10],7)