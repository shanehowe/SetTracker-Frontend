import { useState } from "react";
import { Searchbar as PaperSearchbar } from "react-native-paper"

export const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const hanldeSearchChange = (text: string) => setSearchValue(text);

  return (
      <PaperSearchbar
        testID="searchbar"
        placeholder="search for an exercise"
        value={searchValue}
        onChangeText={hanldeSearchChange}
      />
  );
};