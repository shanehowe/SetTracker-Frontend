import { isValidExerciseName } from "../exerciseValidation";

describe("isValidExerciseName", () => {
  it.each([
    ["", false],
    ["four", false],
    ["a long name that should fail!!!!!!!!", false],
    ["excatly 31 characters should!!!", false],
  ])("Should return false when given invalid length", (text, expected) => {
    expect(isValidExerciseName(text).isValid).toBe(expected);
  });

  it.each([
    ["fivel", true],
    ["excatly 30 characters should!!", true],
    ["normal folder name", true]
  ])("Should return true when given valid length", (text, expected) => {
    expect(isValidExerciseName(text).isValid).toBe(true);
  })
});
