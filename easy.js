// find if a linked list has a cycle
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let pointer1 = head;
  let pointer2 = head.next;

  while (pointer1 && pointer2) {
    if (pointer1 === pointer2) return true;
    pointer1 = pointer1.next;
    if (!pointer2.next) {
      return false;
    } else {
      pointer2 = pointer2.next.next;
    }
  }

  return false;
};