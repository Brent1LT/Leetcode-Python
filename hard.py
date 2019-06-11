
def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
  if len(nums1) > len(nums2):
    nums1, nums2 = nums2, nums1
  start = 0
  end = len(nums1)
    
  while start <= end:
      position_x = (start + end) // 2
      position_y = ((len(nums1) + len(nums2) + 1) // 2) - position_x
      min_x = nums1[position_x - 1] if position_x else -math.inf
      max_x = nums1[position_x] if position_x != len(nums1) else math.inf
      min_y = nums2[position_y - 1] if position_y else -math.inf
      max_y = nums2[position_y] if position_y != len(nums2) else math.inf
      
      if min_x <= max_y and min_y <= max_x:
        if (len(nums1) + len(nums2)) % 2 != 0:
          return max(min_x, min_y)
        else:
          num1 = max(min_x, min_y)
          num2 = min(max_x, max_y)
          return (num1 + num2) / 2
      elif min_x > max_y:
        end = position_x - 1
      else:
        start = position_x + 1