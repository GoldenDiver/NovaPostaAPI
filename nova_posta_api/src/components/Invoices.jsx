import { styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../futures/title/titleSlice";
import { Box } from "@mui/material";
import CheckInvoice from "./CheckInvoice";

function Invoices() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Invoce"));
  }, [dispatch]);

  const StyledBox = styled(Box)({ marginTop: 20, textAlign: "center" });

  return (
    <StyledBox>
      <CheckInvoice />
    </StyledBox>
  );
}

export default Invoices;
