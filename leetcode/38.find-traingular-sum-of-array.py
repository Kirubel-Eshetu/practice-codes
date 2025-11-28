from typing import List

class Solution:
    def traingularSum(self, nums: List[int]) -> int:
        while len(nums) > 1:
            newArray = []
            for i in range(len(nums) - 1):
                newArray.append((nums[i] + nums[i + 1]) % 10)
            nums = newArray
        return nums[0]