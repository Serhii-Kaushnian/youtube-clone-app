import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
function SearchBar() {
  const navigate = useNavigate();
  const [searchTherm, setSearchTherm] = useState("");
  const onSearch = (e) => {
    setSearchTherm(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTherm) {
      navigate(`/search/${searchTherm}`);
      setSearchTherm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input className="search-bar" placeholder="Search" value={searchTherm} onChange={onSearch} />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
