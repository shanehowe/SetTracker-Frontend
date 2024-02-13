import { Searchbar as PaperSearchbar } from "react-native-paper"

interface SearchbarProps {
  searchFilter: string;
  handleSearchChange: (text: string) => void;
};

export const Searchbar = ({ searchFilter, handleSearchChange }: SearchbarProps) => {
  return (
      <PaperSearchbar
        testID="searchbar"
        placeholder="search for an exercise"
        value={searchFilter}
        onChangeText={handleSearchChange}
      />
  );
};