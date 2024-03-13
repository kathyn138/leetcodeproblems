class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_tracker = set(nums)
        longest = 0

        for num in num_tracker:
            currLen = 0

            if num - 1 in num_tracker:
                while num + currLen in num_tracker:
                    currLen += 1
                
                longest = max(longest, currLen)

        return longest