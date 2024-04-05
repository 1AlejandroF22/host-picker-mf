import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "ColorPicker/ColorPicker";
import { useColors } from "ColorPicker/useColors";
import ColorList from "ColorList/ColorList";
import "./index.css";

const App = () => {

  const { 
    color,
    colorsList,
    handleChangeColor,
    handleClickClearColors,
    handleSubmitSaveColor,
   } = useColors(); 

  return(
    <>
  <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
  <div className="container mt-4">
    <div className="row">
    <div className="col-12 col-md-4">
    <ColorList 
      colorList={colorsList}
      handleClickClearColors={handleClickClearColors}
    />
    </div>
    <div className="col-12 col-md-8"> 
    <ColorPicker 
      color={color}
      handleChangeColor={handleChangeColor}
      handleSubmitSaveColor={handleSubmitSaveColor}
    />
    </div>
    </div>
  </div>

    </>
  );
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
