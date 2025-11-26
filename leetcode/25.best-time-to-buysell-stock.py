class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        minPrice = float('inf') #float('inf') -> Positive infinity
        maxProfit = 0

        for price in prices:
            if price < minPrice:
                minPrice = price

            profit = price - minPrice
            if profit > maxProfit:
                maxProfit = profit
        return maxProfit
        
            
