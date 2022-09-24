import { Autocomplete, CssBaseline, TextField } from "@mui/material";
import { useState } from "react";
import { getCityes, getStreets } from "../services/fetching";

import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
  const [city, setCity] = useState('');
  const selectCity = {};
  const [searchCity, setSearchCity] = useState([]);

  const [street, setStreet] = useState('')
  const selectStreet = {}


  function onChange(e) {
    setCity(e.target.value);
    getCityes(city).then((data) => setSearchCity(data.data.data[0].Addresses));
  }

  function onSearchClick() {
    
  }
  return (
    <>
      <Autocomplete
        disableClearable
        options={searchCity.map((item) => item.Present)}
        onChange={(event, value) => {
          setCity(value);
          selectCity.name = value;
          selectCity.ref = searchCity.filter(
            (item) => item.Present === value
          )[0].Ref;
          console.log(selectCity);
        }}
        renderInput={(params) => (
          <>
            <CssBaseline />
            <TextField
              {...params}
              label="Select city"
              variant="outlined"
              onChange={onChange}
              value={city}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          </>
        )}
      />
      <Button
        onClick={onSearchClick}
        sx={{ mt: 1, ml: 3 }}
        variant="outlined"
        endIcon={<SearchIcon />}
      >
        Search offices
      </Button>
    </>
  );
}
