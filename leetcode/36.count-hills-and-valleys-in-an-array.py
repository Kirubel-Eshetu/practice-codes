from typing import List

class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        arr = [nums[0]]
        for n in nums[1:]:
            if n != arr[i]:
                arr.append(n)

        count = 0
        for i in range(1, len(arr) - 1):
            if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
                count += 1
            elif arr[i] < arr[i - 1] and arr[i] < arr[i + 1]:
                count += 1
            
        return count