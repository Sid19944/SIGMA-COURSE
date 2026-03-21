// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

import Alert from "@mui/material/Alert";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

// import CheckIcon from "@mui/icons-material/Check";

// function App() {
//   let handelButton = () => {
//     console.log("button was clicked");
//   };

//   return (
//     <>
//       <h1>Someting</h1>
//       <Button
//         variant="contained"
//         size="small"
//         color="success"
//         onClick={handelButton}
//       >
//         Click me
//       </Button>
//       <Button variant="outlined" color="error">
//         Click me
//       </Button>
//       <Button variant="contained" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <button>Click me</button>
//       <Alert severity="info">
//         Here is a gentle confirmation that your action was successful.
//       </Alert>
//     </>
//   );
// }

function App() {
  return (
    <>
      <WeatherApp/>
    </>
  );
}

export default App;
