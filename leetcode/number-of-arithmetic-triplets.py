class Solution:
    def arithmeticTriplets(self, nums: list[int], diff: int) -> int:
        count = 0
        n = len(nums)
        for i in range(n):
            for j in range(i+1, n):
                if nums[j] - nums[i] == diff:
                    for k in range(j+1, n):
                        if nums[k] - nums[j] == diff:
                            count +=1
        return count