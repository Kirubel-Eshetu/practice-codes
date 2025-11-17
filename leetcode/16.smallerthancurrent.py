class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:

        sorted_nums = sorted(nums)
        
        first_index = {}
        for i, num in enumerate(sorted_nums):
            if num not in first_index:
                first_index[num] = i
        
        return [first_index[num] for num in nums]