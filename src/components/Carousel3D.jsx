import React, { useCallback, useState, useEffect, useMemo } from "react";

// CSS imports
import style from "./Carousel3D.module.css";

const Carousel3D = (props) => {
  //Extracting Valid paramters for custom styling;
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
    backgroundColor: props.CardStyle.BackgroundColor || "",
    background: props.CardStyle.Background || "null",
    aspectRatio: props.CardStyle.AspectRatio || "none",
    padding: props.CardStyle.Padding || "0",
  };

  const slide = useMemo(() => [1, 2, 3, 4, 5], []);
  const length = slide.length;
  //current represent the center card of the carousel.
  const [current, setCurrent] = useState(2);
  const [toshow, setToShow] = useState([1, 0, 0, 0, 0, 0]);

  //initializing state according to the length of props
  useEffect(() => {
    setToShow(() => {
      let cardlength = props.CardList.length;
      let temp = [1];
      if (cardlength >= 3) {
        temp.push(cardlength - 2);
        temp.push(cardlength - 1);
        temp.push(0);
        temp.push(1);
        temp.push(2);
      } else {
        temp.push(0);
        temp.push(cardlength - 1);
        temp.push(0);
        temp.push(cardlength - 1);
        temp.push(0);
      }
      return temp;
    });
  }, [props.CardList]);

  //Next Slide Handler
  const nextSlide = useCallback(() => {
    //setCurrent to next slide
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
    //setCurrent to prev slide
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
      <div className={style.toggleBtnPrev} onClick={prevSlide} />
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
      <div className={style.toggleBtnNext} onClick={nextSlide} />
    </div>
  );
};

export default Carousel3D;
