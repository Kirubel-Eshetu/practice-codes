from typing import List

class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        totalTime = 0
        target = tickets[k]

        for i in range(len(tickets)):
            if i <= k:
                totalTime += min(tickets[i], target)
            else:
                totalTime += min(tickets[i], target -1)
        
        return totalTime