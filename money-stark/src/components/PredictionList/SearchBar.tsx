import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { TextField, InputAdornment, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        margin: "auto",
        mt: 2,
        mb: 4,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        placeholder="Investment amount in rupees"
        value={query}
        type="number"
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => onSearch(query)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        variant="standard"
      />
    </Paper>
  );
};

export default SearchBar;
