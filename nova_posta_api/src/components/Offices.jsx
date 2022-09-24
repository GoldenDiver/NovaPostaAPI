import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import SearchForm from "./SearchForm";

function Offices() {
  // const offices = useSelector((state) => state.offices.offices);
  // console.log(offices);

  const StyledBox = styled(Box)({ marginTop: 20, textAlign: "center" });
    
  return (
    <StyledBox>
      <SearchForm />
    </StyledBox>
  );
}

export default Offices;
