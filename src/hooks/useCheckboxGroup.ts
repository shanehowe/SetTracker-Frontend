import { useState } from "react";

export const useCheckboxGroup = <T>(
  alreadySelected: T[] = [],
  compare: (a: T, b: T) => boolean
) => {
  const [selected, setSelected] = useState<T[]>([...alreadySelected]);

  const handleSelect = (value: T) => {
    if (selected.some((item) => compare(item, value))) {
      setSelected(selected.filter((item) => !compare(item, value)));
    } else {
      setSelected(selected.concat(value));
    }
  };

  return { selected, handleSelect };
};
