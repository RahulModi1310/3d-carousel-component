import React from "react";
import "./App.css";
import Carousel3D from "../../src/components/Carousel3D";

function App() {
  const CardList = [
    {
      element: <div>Card 1</div>,
    },
    {
      element: <div>Card 2</div>,
    },
    {
      element: <div>Card 3</div>,
    },
    {
      element: <div>Card 4</div>,
    },
    {
      element: <div>Card 5</div>,
    },
    {
      element: <div>Card 6</div>,
    },
    {
      element: <div>Card 7</div>,
    },
    {
      element: <div>Card 8</div>,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        3d-carousel-component
        <Carousel3D ContainerStyle={{}} CardStyle={{}} CardList={CardList} />
      </header>
    </div>
  );
}

export default App;
