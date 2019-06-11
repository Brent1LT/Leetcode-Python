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
