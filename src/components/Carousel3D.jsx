import React, { useCallback, useState, useEffect, useMemo } from "react";

import style from "./Carousel3D.module.css";

import PrevButton from "./Assets/PrevButton.png";
import NextButton from "./Assets/NextButton.png";

const Carousel3D = (props) => {
  const ContainerStyle = {
    width: props.ContainerStyle.Width || "100%",
    height: props.ContainerStyle.Height || "100%",
    backgroundColor: props.ContainerStyle.BackgroundColor || "",
    background: props.ContainerStyle.Background || "null",
    padding: props.ContainerStyle.Padding || "0",
    margin: props.ContainerStyle.Margin || "0",
  };

  const CardStyle = {
    width: props.CardStyle.Width || "none",
    height: props.CardStyle.Height || "none",
    aspectRatio: props.CardStyle.AspectRatio || "none",
    padding: props.CardStyle.Padding || "0",
  };

  const slide = useMemo(() => [1, 2, 3, 4, 5], []);
  const length = slide.length;
  //current represent the center card of the carousel.
  const [current, setCurrent] = useState(0);
  const [toshow, setToShow] = useState([1, 0, 0, 0, 0, 0]);

  //initializing state according to the length of props
  useEffect(() => {
    setToShow(() => {
      let val = 0;
      let temp = [1];
      slide.map(() => {
        temp.push(val);
        val += 1;
        if (val === props.CardList.length) val = 0;
        return 0;
      });
      return temp;
    });
  }, [props.CardList, slide]);

  //Next Slide Handler
  const nextSlide = useCallback(() => {
    setCurrent((prevState) => (prevState === length - 1 ? 0 : prevState + 1));

    //Change the toshow array to change content of carousel
    let temp = [...toshow];
    let change = temp[0];
    temp[change] = change === 1 ? temp[5] + 1 : temp[change - 1] + 1;
    if (temp[change] === props.CardList.length) temp[change] = 0;
    temp[0] = change === 5 ? 1 : change + 1;
    setToShow(temp);
  }, [length, props.CardList, toshow]);

  //Previous Slide Handler
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

    //Change the toshow array to change content of carousel
    let temp = [...toshow];
    temp[0] = temp[0] === 1 ? 5 : temp[0] - 1;
    let change = temp[0];
    temp[change] = change === 5 ? temp[1] - 1 : temp[change + 1] - 1;
    if (temp[change] === -1) temp[change] = props.CardList.length - 1;
    setToShow(temp);
  };

  return (
    <div className={style.CarouselContainer} style={ContainerStyle}>
      <img
        className={style.toggleBtn}
        onClick={prevSlide}
        src={PrevButton}
        alt=""
      />
      <div className={style.CardContainer}>
        {slide.map((obj, indx) => {
          return (
            <div
              key={indx}
              className={`${style.Card} ${
                (indx < current && style[`prevImg${current - indx}`]) ||
                (indx > current && style[`nextImg${indx - current}`]) ||
                (indx === current && style["active"])
              }`}
              style={CardStyle}
            >
              {props.CardList[toshow[indx + 1]].element}
            </div>
          );
        })}
      </div>
      <img
        className={style.toggleBtn}
        onClick={nextSlide}
        src={NextButton}
        alt=""
      />
    </div>
  );
};

export default Carousel3D;
