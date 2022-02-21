import React from "react";
import Cat1 from "../Assets/Cat1.jpg";
import Cat2 from "../Assets/Cat2.jpg";
import Cat3 from "../Assets/Cat3.jpg";
import Cat4 from "../Assets/Cat4.jpg";
import Cat5 from "../Assets/Cat5.jpg";
import Cat6 from "../Assets/Cat6.jpg";

const CardComp = (image, alt) => {
  const style = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <img src={image} alt={alt} style={style} />
    </div>
  );
};

const CardList = [
  {
    element: CardComp(Cat1, "Cat1"),
  },
  {
    element: CardComp(Cat2, "Cat2"),
  },
  {
    element: CardComp(Cat3, "Cat3"),
  },
  {
    element: CardComp(Cat4, "Cat4"),
  },
  {
    element: CardComp(Cat5, "Cat5"),
  },
  {
    element: CardComp(Cat6, "Cat6"),
  },
];

export default CardList;
