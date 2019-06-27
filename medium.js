// how to determine where linked list meets

var detectCycle = function (head) {
  let walk = head;
  let run = head;

  while (run && run.next) {
    walk = walk.next;
    run = run.next.next;

    if (walk === run) {
      let start = head;
      // if there is s cycle, head and walk will meet at the beginning of cycle
      while (start !== walk) {
        start = start.next;
        walk = walk.next;
      }

      return walk;
    }
  }

  return null;
};