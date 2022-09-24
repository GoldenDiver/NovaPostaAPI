import { useState } from "react";
import { lightTheme, darkTheme } from "./context/themeContext";
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Invoices from "./components/Invoices";
import Offices from "./components/Offices";
// import useSetLocations from "./components/setRedux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRegiones } from "./services/fetching";
import { setOffices } from "./futures/offices/officesSlice";

function App() {
  const [mode, setMode] = useState(lightTheme);

  function onChangeMode(mode) {
    mode === false ? setMode(lightTheme) : setMode(darkTheme);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getRegiones().then((data) => dispatch(setOffices(data.data)));
  }, [dispatch]);

  return (
      <ThemeProvider theme={mode}>
        <BrowserRouter>
          <MenuBar onChangeMode={onChangeMode}/>
          <Routes>
            <Route path="/" element={<Invoices />} />
            <Route path="/offices" element={<Offices />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
