import { formatUtcDateToLocalTimeString, formartUtcDateToLocalDateString } from "../dateUtils";

describe("dateUtils", () => {
  describe("formatUtcDateToLocalTimeString", () => {
    it("should format a UTC date string to a local time string", () => {
      const date = "2021-07-01T00:00:00Z";
      const result = formatUtcDateToLocalTimeString(date);
      expect(result).toBe("1:00:00 AM");
    });
  });

  describe("formartUtcDateToLocalDateString", () => {
    it("should format a UTC date string to a local date string", () => {
      const date = "2021-07-01T00:00:00Z";
      const result = formartUtcDateToLocalDateString(date);
      expect(result).toBe("7/1/2021");
    });
  });
});