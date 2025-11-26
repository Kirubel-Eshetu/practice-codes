from typing import List

class Soluton:
    def heightChecker(self, heights: List[int]) -> int:
        indices = []
        expected = sorted(heights)
        i = 0

        for height in heights:
            if height != expected[i]:
                indices.append(height)

        numIndices = len(indices)
        return numIndices
