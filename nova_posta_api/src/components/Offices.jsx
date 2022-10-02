import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "./SearchForm";
import { setTitle } from "../futures/title/titleSlice"
// import { setWarehouseTypes } from "../futures/warehouseTypes/warehouseTypesSlice";
// import { getWarehouseTypes } from "../services/fetching";

function Offices() {;
  const dispatch = useDispatch();
  // const warehouseType = [];
  useEffect(() => {
    dispatch(setTitle('Offices'));
    // getWarehouseTypes().then(data => dispatch(setWarehouseTypes(data.data.data)))
  }, [dispatch]);

  const StyledBox = styled(Box)({ marginTop: 20, textAlign: "center" });
    
  return (
    <StyledBox>
      <SearchForm />
    </StyledBox>
  );
}

export default Offices;
