import {
  Box,
  Button,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStatusTTN } from "../services/fetching";
import StatusInvoice from "./StatusInvoice";

export default function CheckInvoice() {
  const navigate = useNavigate();
  const [numberTTN, setNumberTTN] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState({ status: false, text: "" });
  const [statusTTN, setStatusTTN] = useState("");

  useEffect(() => {
    const memory = JSON.parse(localStorage.getItem("items"));
    if (!memory) {
      return;
    } else {
      setItems(memory);
    }
  }, []);

  function offices() {
    navigate("../offices");
  }

  function handleChange(e) {
    setNumberTTN(e.target.value.replace(/[^0-9]/g, ""));
    setError({ ...error, status: false, text: "" });
    if (e.target.value.length > 14) {
      setNumberTTN(numberTTN.substring(0, 14));
      setError({ ...error, status: true, text: "Too many numbers" });
    }
  }

  function onGetStatusTTNClick() {
    if (numberTTN.length === 14) {
      const currentItems = [numberTTN, ...items];
      if (currentItems.length > 10) {
        currentItems.length--;
      }
      setItems(currentItems);
      localStorage.setItem("items", JSON.stringify(currentItems));

      getStatusTTN(numberTTN).then((data) =>
        setStatusTTN({
          status: data.data.data[0].Status,
          warehouseSender: data.data.data[0].WarehouseSender,
          warehouseRecipient: data.data.data[0].WarehouseRecipient,
        })
      );
    } else {
      setError({ ...error, status: true, text: "Too few numbers" });
    }
  }

  function historyClick(e) {
    setNumberTTN(e.target.firstChild.data);
  }

  return (
    <>
      <CssBaseline />
      <Box>
        <TextField
          label="insert invoice number"
          variant="outlined"
          onChange={handleChange}
          value={numberTTN}
          error={error.status}
          helperText={error.text}
        />
        <Button
          sx={{ mt: 1, ml: 2 }}
          variant="outlined"
          onClick={onGetStatusTTNClick}
        >
          Get status TTN
        </Button>
        <Button sx={{ mt: 1, ml: 2 }} variant="outlined" onClick={offices}>
          Offices
        </Button>
      </Box>
      <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 2 }}>
        {/* <TextField
          sx={{ width: "50%" }}
          label="answer"
          multiline
          rows={10}
          variant="outlined"
          value={statusTTN}
        /> */}
        <StatusInvoice status={statusTTN} />
        <List
          sx={{ width: "13%", maxHeight: 250, overflow: "auto" }}
          component="nav"
          aria-label="mailbox folders"
        >
          {items.map((item, index) => (
            <Box key={index}>
              <ListItem button>
                <ListItemText primary={item} onClick={historyClick} />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Stack>
    </>
  );
}
