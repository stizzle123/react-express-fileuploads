import React from "react";
import FileUpload from "./components/FileUpload.js";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
        React File Upload
        <i className="fab fa-reacteurope"></i>
      </h4>
      <FileUpload />
    </div>
  );
}

export default App;
