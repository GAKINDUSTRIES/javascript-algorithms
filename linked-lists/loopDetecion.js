// Given a circular linked list, implement an algorithm that returns the node at the beginnning of the loop
//
// a -> b -> c -> d -> e -> c
//
// Solution:
// Hint: Use fast runner technique.
// Pseudocode:
//   define fast and slow runner
//   k = o
//   While fast != null and fast.next() != null
//      move fast twice
//      move slow once
//      k++
//      if fast == null we find a collision, break
//
//   if fast == null or fast.next() == null means no loop, return null;
//
//   fast = head
//   while (fast != slow)
//    move fast once
//    move slow once
//
//    return fast
//
//




const loopDetection = list => {
  let fast = list.getHead();
  let slow = fast;

  while (fast != null && fast.next() != null) {
    slow = slow.next();
    fast = fast.next().next();
  }

  // List does not have any loop
  if (fast == null || fast.next() == nul)  return null

  fast = list.head();
  while (fast != slow) {
    fast = fast.next();
    slow = slow.next();
  }

  return fast;
}
