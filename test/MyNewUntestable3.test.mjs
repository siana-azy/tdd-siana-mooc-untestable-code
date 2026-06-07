import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePersonRecords, parsePeopleCsv } from "../src/MyNewUntestable3.mjs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// test with no file 
describe("parsePersonRecords", () => {
  test("normal values", () => {
    const csv = "Yor,Forger,27,Female";
    expect(parsePersonRecords(csv)).to.deep.equal([
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" },
    ]);
  });

  test("abscence of age", () => {
    const csv = "Loid,Forger,,Male";
    const result = parsePersonRecords(csv);
    expect(result[0]).to.not.have.property("age");
  });

  test("gender is in lowercase and first letter", () => {
    const csv = "Anya,Forger,6,Female";
    expect(parsePersonRecords(csv)[0].gender).to.equal("f");
  });

  test("more than one person", () => {
    const csv = `Loid,Forger,,Male
Anya,Forger,6,Female
Yor,Forger,27,Female`;
    expect(parsePersonRecords(csv)).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
      { firstName: "Anya", lastName: "Forger", age: 6, gender: "f" },
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" },
    ]);
  });

  test("ignore empty lines", () => {
    const csv = `Anya,Forger,6,Female

Yor,Forger,27,Female`;
    expect(parsePersonRecords(csv)).to.have.length(2);
  });

  test("sup space around values", () => {
    const csv = " Anya , Forger , 6 , Female ";
    const result = parsePersonRecords(csv);
    expect(result[0].firstName).to.equal("Anya");
    expect(result[0].age).to.equal(6);
  });
});


describe("parsePeopleCsv", () => {
  test("read test-people.csv file", async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, "fix/test-people.csv");
    const result = await parsePeopleCsv(filePath);
    expect(result).to.deep.equal([
      { firstName: "Loid", lastName: "Forger", gender: "m" },
      { firstName: "Anya", lastName: "Forger", age: 6, gender: "f" },
      { firstName: "Yor", lastName: "Forger", age: 27, gender: "f" },
    ]);
  });
});