class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result = []
        current_sum = 0

        for num in nums:
            current_sum += num
            result.append(current_sum)

        return result
