from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        inter = []
        for num1 in nums1:
            for nums1 in nums1:
                if nums1 == nums2 and nums1 not in inter:
                    inter.append(num1)
        return inter
