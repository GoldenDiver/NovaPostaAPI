import { Autocomplete, CssBaseline, TextField } from "@mui/material";
import { useState } from "react";
import { getCityes } from "../services/fetching";

import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import OfficesRender from "./OfficesRender";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [selectCity, setSelectCity] = useState({});
  const [searchCity, setSearchCity] = useState([]);
  const [btn, setBtn] = useState(false);

  function onChange(e) {
    setCity(e.target.value);
    getCityes(city).then((data) => setSearchCity(data.data.data[0].Addresses));
  }

  function onSearchClick() {
    if (!btn) {
      setBtn(!btn);
    } else {
      setBtn(!btn);
    }
  }

  function onClickAutocomplete(event, value) {
    setCity(value);
    const ref = searchCity.filter((item) => item.Present === value)[0].Ref;
    const warehouses = searchCity.filter((item) => item.Present === value)[0]
      .Warehouses;
    const main = searchCity.filter((item) => item.Present === value)[0]
      .MainDescription;
    setSelectCity({ name: value, warehouses, main, ref });
  }

  return (
    <>
      <CssBaseline />
      <Autocomplete
        freeSolo
        sx={{ width: 500, ml: "auto", mr: "auto" }}
        disableClearable
        options={searchCity.map((item) => item.Present)}
        onChange={onClickAutocomplete}
        renderInput={(params) => (
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
      {btn ? <OfficesRender city={selectCity}  /> : ''}
    </>
  );
}
