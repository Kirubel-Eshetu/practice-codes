from math import ceil

n, m, a = map(int, input().split())

flagAlongHeight = ceil(n / a)
flagAlongWidth = ceil(m /a)

totalFlag = flagAlongHeight * flagAlongWidth
print(totalFlag)