import { StrictMode } from "react";
import "./App.css";
import Button from "../button/button";
import Header from "../header/header";
import Field from "../field/field";

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Button />
    </div>
  );
}

export default App;
