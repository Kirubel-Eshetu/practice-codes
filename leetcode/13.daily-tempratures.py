from typing import List

class Solution:
    def dailyTempratures(self, tempratures: List[int]) -> List[int]:
        n = len(tempratures)
        answer = [0] * n
        stack = []

        for i, temp in enumerate(tempratures):
            while stack and temp > tempratures[stack[-1]]:
                prev_day = stack.pop()
                answer[prev_day] = i - prev_day
            stack.append(i)
        return answer


    