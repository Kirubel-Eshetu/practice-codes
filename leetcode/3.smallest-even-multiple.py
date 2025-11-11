class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        m:int
        if n%2 == 0:
            m = n
        else:
            m = n*2

        return m