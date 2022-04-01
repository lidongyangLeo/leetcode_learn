/** 计算两数之和
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number []}
 */

// 第一种解法：

function twoSum(nums, target) {
  // 思路 两次循环遍历数组逐一相加对比。
  for (let index = 0; index < nums.length; index++) {
    for (let temIndex = index + 1; temIndex < nums.length - 1; temIndex++) {
      if (target === nums[index] + nums[temIndex]) {
        console.log([index, temIndex]);
        return [index, temIndex];
      }
    }
  }
  return [];
}

// twoSum([2, 7, 11, 15], 9);

// 第二种解法思路：
// 根据target 减去当前的值，来查看余数是否在Map里。如果在 把对应value和当前的index取出来即可。
// 如果不在map里，把当前的值和下标放进Map里。
// 省去了一次循环。

/**
 * 计算两数之和优化
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number []}
 */
function twoSumRefactor(nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const another = target - nums[index];
    if (map.has(another)) {
      return [map.get(another), index];
    }
    map.set(nums[index], index);
  }
}

twoSumRefactor([2, 7, 11, 15], 9);

/**
 * 知识拓展
 *
 * 查找表法：
 * - 在遍历的同时，记录一些信息，以省去一层循环，这是以空间换时间的想法。
 * - 需要记录已经遍历过的数值和它所随对应的下标，可以借助查找表法实现。
 * - 查找表有两个常用的实现
 *  - 哈希表
 *  - 平衡二叉树搜索树
 *
 *
 *
 */
