import { useState } from "react";

export const useCheckboxGroup = <T>() => {
  const [selected, setSelected] = useState<T[]>([]);

  const handleSelect = (value: T) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return { selected, handleSelect };
};