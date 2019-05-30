def isPalindrome(self, x: int) -> bool:
  string = str(x)
  reversed = string[::-1]
  return string == reversed

def searchInsert(self, nums: List[int], target: int) -> int:
  if target < nums[0]:
    return 0
  i = 0
  while i < len(nums):
    if nums[i] == target:
      return i
    elif i == len(nums) -1 or (nums[i] < target and nums[i + 1] > target):
      return i + 1
    else:
      i += 1