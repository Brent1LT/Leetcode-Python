# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


def node_traversal(head):
  string = ''
  current = head
  while(current != None):
    string += str(current.val)
    current = current.next

  return string


class Solution:
  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    first_num = int(node_traversal(l1)[::-1])
    second_num = int(node_traversal(l2)[::-1])
    total = str(first_num + second_num)[::-1]
    answer = list(total)
    result = []
    for el in answer:
      result.append(int(el))
    return result


def lengthOfLongestSubstring(self, s: str) -> int:
  # non optimal solution

  # if len(s) == 0:
  #   return 0
  # chars = {}
  # longest = -math.inf
  # i = 0
  # start = 0
  # while i < len(s):
  #   if s[i] not in chars:
  #     chars[s[i]] = i
  #   else:
  #     longest = i - start if i - start > longest else longest
  #     start = chars[s[i]] + 1
  #     i = chars[s[i]]
  #     chars = {}

  #   i += 1

  # longest = i - start if i - start > longest else longest
  # return longest

# my other solution better time complexity
  if len(s) == 0:
    return 0
  chars = {}
  longest = -math.inf
  current = 0
  start = 0
  while current < len(s):
    if s[current] not in chars:
      chars[s[current]] = current
    else:
      longest = current - start if current - start > longest else longest
      start = max(start, chars[s[current]] + 1)
      chars[s[current]] = current
      
    current += 1

  longest = current - start if current - start > longest else longest  
  return longest

# most optimal solution

  # windowStart, maxLength = 0, 0
  # hashmap = {}
  # for windowEnd in range(len(s)):
  # if s[windowEnd] in hashmap:
  # # If the element is present in the hashmap then start considering from that position.
  # # Also make sure to take the greatest of the then windowStart value and the value present in the hashmap
  #   windowStart = max(windowStart ,hashmap[s[windowEnd]] + 1)
  # hashmap[s[windowEnd]] = windowEnd
  # maxLength = max(maxLength, windowEnd - windowStart + 1)
  # return maxLength
