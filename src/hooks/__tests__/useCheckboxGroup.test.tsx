import { act, renderHook } from "@testing-library/react-native";
import { useCheckboxGroup } from "../useCheckboxGroup";

describe("useCheckboxGroup", () => {
  const compareFn = (a: string, b: string) => {
    return a === b;
  }
  it("should return selected and handleSelect", () => {
    const { result } = renderHook(() => useCheckboxGroup([], compareFn));
    expect(result.current.selected).toEqual([]);
    expect(result.current.handleSelect).toBeInstanceOf(Function);
  });

  it("should add and remove selected item", () => {
    const { result } = renderHook(() => useCheckboxGroup([], compareFn));
    expect(result.current.selected).toEqual([]);

    act(() => {
      result.current.handleSelect("one");
    });
    expect(result.current.selected).toEqual(["one"]);

    act(() => {
      result.current.handleSelect("two");
    });
    expect(result.current.selected).toEqual(["one", "two"]);

    act(() => {
      result.current.handleSelect("one");
    });
    expect(result.current.selected).toEqual(["two"]);
  });

  it("should not mutate selected", () => {
    const { result } = renderHook(() => useCheckboxGroup([], compareFn));
    expect(result.current.selected).toEqual([]);

    act(() => {
      result.current.handleSelect("one");
    });
    expect(result.current.selected).toEqual(["one"]);

    act(() => {
      result.current.handleSelect("two");
    });
    expect(result.current.selected).toEqual(["one", "two"]);

    const selected = result.current.selected;
    act(() => {
      result.current.handleSelect("one");
    });
    expect(result.current.selected).toEqual(["two"]);
    expect(selected).toEqual(["one", "two"]);
  });
});