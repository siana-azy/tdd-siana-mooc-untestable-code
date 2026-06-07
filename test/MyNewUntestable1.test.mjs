import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/MyNewuntestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
 test("It's Christmas day !", () => {     
    const today = new Date(2026, 11, 25);        
    expect(daysUntilChristmas(today)).to.equal(0); 
  });
 test("Days until Christmas", () => {      
    const today = new Date(2026, 5, 7);       
    expect(daysUntilChristmas(today)).to.equal(201); 
  });
   test("Days until Christmas, the day just after", () => {       
    const today = new Date(2026, 11, 26);        
    expect(daysUntilChristmas(today)).to.equal(364); 
  });


});
