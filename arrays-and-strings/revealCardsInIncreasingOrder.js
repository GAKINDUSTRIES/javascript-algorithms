// https://leetcode.com/problems/reveal-cards-in-increasing-order/
//In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.
//
// Initially, all the cards start face down (unrevealed) in one deck.

// Now, you do the following steps repeatedly, until all cards are revealed:

//  1- Take the top card of the deck, reveal it, and take it out of the deck.
//  2- If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
//  3- If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
//
// Return an ordering of the deck that would reveal the cards in increasing order.

// The first entry in the answer is considered to be the top of the deck.
//
//
//
//
// Approach: Simulate The Process with A Queue
// 1. Sort the deck, it is actually the "final sequence" we want to get according to the question.
// 2. Then put it back to the result array, we just need to deal with the index now!
// 3. Simulate the process with a queue (initialized with 0,1,2...(n-1)), now how do we pick the card?
// 4. We first pick the index at the top: rst[q.poll()] = deck[i]
// 5. Then we put the next index to the bottom: q.add(q.poll());
// 6. Repeat it n times, and you will have the result array!
//
// Let's walk through the example:
//    Input: [17,13,11,2,3,5,7]
//    Output: [2,13,3,11,5,17,7]
// 1. Sort the deck: [2,3,5,7,11,13,17], this is the increasing order we want to generate
// 2. Initialize the queue: [0,1,2,3,4,5,6], this is the index of the result array
// 3. The first card we pick is rst[0], observe the deck, it should be deck[0]==2, so assign rst[0]=2
// 4. Then we put rst[1] to the bottom, so we re-insert 1 to the queue at the end
// 5. The second card we pick is rst[2], which should be deck[1]==3, so assign rst[2]=3
// 6. Then we re-insert 3 to the queue at the end
// 7. Each time we assign 1 value to the rst, so we repeat this n times.
//
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
//


const revealCards = deck => {
  let sortedDeck = deck.slice().sort((a,b) => { return a - b });
  let size = sortedDeck.length;
  let queue = [];
  let i = 0;
  let elem;
  for (i; i < size; i++) queue[i] = i;

  i=0
  while (queue.length !== 0) {
    deck[queue.shift()] = sortedDeck[i];
    elem = queue.shift();
    if (elem != null )  queue.push(elem);
    i++;
    console.log(deck, queue);
  }

  return deck;
}

console.log(revealCards([17,13,11,2,3,5,7]));
