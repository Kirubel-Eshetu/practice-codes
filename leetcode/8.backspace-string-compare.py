class Solution:
    def backspaceCompare(self, s:str, t:str) -> bool:
        def build(string):
            stack = []
            for ch in string:
                if ch != "#":
                    stack.append(ch)
                elif stack:
                    stack.pop()
            return "".join(stack)
        
        return build(s) == build(t)