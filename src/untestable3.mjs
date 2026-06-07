import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";
//this function does two things at once: reading the file AND parsing the data
// the problem is that we can't test the parsing without having a real file on disk
// so we have to separye the two into two functions:
// 1) one that reads the file 
// 2) and one wher we can test this one with just a string, no file needed

export async function parsePeopleCsv(filePath) {
  const csvData = await readFile(filePath, { encoding: "utf8" });
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  //everything below is mixed with the file reading, so it's hard to test in isolation
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}
