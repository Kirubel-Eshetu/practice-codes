from typing import List

class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        missingCount = 0
        current = 1
        i = 0

        while True:
            if i < len(arr) and arr[i] == current:
                i += 1
            else:
                missingCount += 1
                if missingCount == k:
                    return current
            
            current += 1
