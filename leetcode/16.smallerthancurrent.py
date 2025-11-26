from typing import List

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:

        sortedNums = sorted(nums)
        
        firstIndex = {}
        for i, num in enumerate(sortedNums):
            if num not in firstIndex:
                firstIndex[num] = i
        
        return [firstIndex[num] for num in nums]