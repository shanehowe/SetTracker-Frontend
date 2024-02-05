import { isValidFolderName } from "../validation";

describe("isValidFolderName", () => {
  it("succeeds given a valid name", () => {
    const validFolderName = "valid name";

    const result = isValidFolderName(validFolderName);
    expect(result.isValid).toBe(true);
    expect(result.message).toEqual("Folder name is valid");
  });

  it("fails when given an empty folder name", () => {
    const result = isValidFolderName("");

    expect(result.isValid).toBe(false);
    expect(result.message).toEqual("Folder name cannot be empty");
  });

  it("fails when given a folder name above 20 chars in length", () => {
    const reallyLongName = "123456789012345678901" // length = 21

    const result = isValidFolderName(reallyLongName);
    expect(result.isValid).toBe(false);
    expect(result.message).toEqual('Folder name cannot be longer than 20 characters');
  })
});