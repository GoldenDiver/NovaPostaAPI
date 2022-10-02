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
    const number = e.target.value;
    setNumberTTN(number.replace(/[^0-9]/g, ""));
    setError({ ...error, status: false, text: "" });
    if (number.length > 14) {
      setError({ ...error, status: true, text: "Too many numbers" });
      setStatusTTN({
        status: "",
        warehouseSender: "",
        warehouseRecipient: "",
      });
      setTimeout(() => {
        setNumberTTN(numberTTN.substring(0, 14));
        setError({ ...error, status: false, text: "" });
      }, 500);
    }
  }

  function onGetStatusTTNClick() {
    if (numberTTN.length === 14) {
      const currentItems = [numberTTN, ...items];
      if (currentItems.length > 10) {
        currentItems.length--;
      }
      getStatusTTN(numberTTN).then((data) => {
        if (data.data.success) {
          setItems(currentItems);
          localStorage.setItem("items", JSON.stringify(currentItems));
          setStatusTTN({
            status: data.data.data[0].Status,
            warehouseSender: data.data.data[0].WarehouseSender,
            warehouseRecipient: data.data.data[0].WarehouseRecipient,
          });
        } else {
          setError({ ...error, status: true, text: "Wrong number" });
          setStatusTTN({
            status: "",
            warehouseSender: "",
            warehouseRecipient: "",
          });
        }
      });
    } else {
      setError({ ...error, status: true, text: "Too few numbers" });
      setStatusTTN({
        status: "",
        warehouseSender: "",
        warehouseRecipient: "",
      });
    }
  }

  function historyClick(e) {
    setNumberTTN(e.target.firstChild.data);
  }

  function onClearHistoryClick() {
    setItems([]);
    localStorage.setItem("items", JSON.stringify([]));
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
        <Stack spacing={4} sx={{ width: "40%" }}>
          <StatusInvoice status={statusTTN} />
          <Button variant="outlined" onClick={onClearHistoryClick}>
            Clear history
          </Button>
        </Stack>
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
