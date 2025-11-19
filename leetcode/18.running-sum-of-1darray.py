class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        result = []
        current_sum = 0

        for num in nums:
            current_sum += num
            result.append(current_sum)

        return result
