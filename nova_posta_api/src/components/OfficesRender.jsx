import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getOffices } from "../services/fetching";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function OfficesRender({ city }) {
  const pages = Math.ceil(city.warehouses / 10);
  const [page, setPage] = useState(1);
  const [offices, setOffices] = useState([]);
  const [warehouseType, setWarehouseType] = useState("");

  useEffect(() => {
    getOffices(city.ref, page).then((data) => setOffices(data.data.data));
  }, [city.ref, page]);

  const warehouseTypes = useSelector(
    (state) => state.warehouseTypes.warehouseTypes
  );

  function paginationChange(event, value) {
    setPage(value);
  }

  function selectChange(e) {
    setWarehouseType(e.target.value);
  }

  return (
    <Box>
        <Box sx={{ maxWidth: 250, ml: 'auto', mr: 'auto', mt: 2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Warehouse Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={warehouseType}
          label="Warehouse Type"
          onChange={selectChange}
        >
          {warehouseTypes.map((item) => (
            <MenuItem value={item.Ref}>{item.Description}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>

      {offices.map((office) => (
        <Accordion key={office.Ref} sx={{mt:2}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{office.Description}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Pagination
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        count={pages}
        onChange={paginationChange}
      />
    </Box>
  );
}
