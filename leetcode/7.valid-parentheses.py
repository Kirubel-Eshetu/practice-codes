class Solution:
    def isValid(self, s:str) -> bool:
        stack = []
        pairs = {")": "(", "]": "[", "}": "{"}
        for b in s:
            if b in "([{":
                stack.append(b)
            elif b in ")]}":
                if not stack or stack[-1] != pairs[b]:
                    return False
                stack.pop()
        return not stack