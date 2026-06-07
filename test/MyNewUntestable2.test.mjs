import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue } from "../src/MyNewUntestable2.mjs";

describe("diceHandValue", () => {
  test("paire de 3 → valeur 103", () => {
    expect(diceHandValue(3, 3)).to.equal(103);
  });

  test("paire de 6 → valeur 106", () => {
    expect(diceHandValue(6, 6)).to.equal(106);
  });

  test("dés différents → retourne le plus grand", () => {
    expect(diceHandValue(5, 3)).to.equal(5);
    expect(diceHandValue(2, 6)).to.equal(6);
  });
});