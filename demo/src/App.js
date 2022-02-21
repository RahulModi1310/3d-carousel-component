import React from "react";
import "./App.css";
import Carousel3D from "../../src/components/Carousel3D";
import CardList from "./CarouselList";

function App() {
  const ContainerStyle = {
    Width: "100%",
    Height: "max-content",
    Padding: "2em 5%",
    BackgroundColor: "#D65A31",
  };

  const CardStyle = {
    Width: "100%",
    Height: "fit-content",
    AspectRatio: "5/3",
    Padding: "0.25em",
    BackgroundColor: "#393E46",
  };

  return (
    <div className="App">
      <h1>3d-carousel-component</h1>
      <Carousel3D
        ContainerStyle={ContainerStyle}
        CardStyle={CardStyle}
        CardList={CardList}
      />
      <h2>💕Hello! Kitten Lovers💕</h2>
    </div>
  );
}

export default App;
