function diceRoll() {
  const min = 1;
  const max = 6;
  //math. random() is not deterministic,
  // we cannot force die1 === die2 nor control witch die has the bigger number
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// diceHandValue() calls diceRoll() internally, so we can't control the dice values from the test
// but instead we can pass the dice values directly as parameters
// diceHandValue(die1 = diceRoll(), die2 = diceRoll())
// not in test :  diceHandValue() : diceRoll() is called normally
// in test: diceHandValue(3, 3) :we control the dice directly, no need for a fake random function
export function diceHandValue() {
  const die1 = diceRoll();
  const die2 = diceRoll();
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
