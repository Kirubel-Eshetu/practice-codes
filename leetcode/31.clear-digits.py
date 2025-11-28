class Solution:
    def clearDigits(self, s:str) -> str:
        container = []

        for ch in s:
            if ch.isdigit():
                if container:
                    container.pop()
            else:
                container.append(ch)

        return "".join(container)