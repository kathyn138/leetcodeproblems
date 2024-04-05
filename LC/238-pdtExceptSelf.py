class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        answer = [1]

        prefix = 1

        for i in range(1, len(nums)):
          prefix *= nums[i - 1]
          answer.append(prefix)

        postfix = 1

        for i in range(len(nums) - 1, -1, -1):
          answer[i] *= postfix
          postfix *= nums[i]

        return answer
