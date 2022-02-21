"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Carousel3DModule = _interopRequireDefault(require("./Carousel3D.module.css"));

var _PrevButton = _interopRequireDefault(require("./Assets/PrevButton.png"));

var _NextButton = _interopRequireDefault(require("./Assets/NextButton.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Carousel3D = function Carousel3D(props) {
  //Extracting Valid paramters for custom styling;
  var ContainerStyle = {
    width: props.ContainerStyle.Width || "100%",
    height: props.ContainerStyle.Height || "100%",
    backgroundColor: props.ContainerStyle.BackgroundColor || "",
    background: props.ContainerStyle.Background || "null",
    padding: props.ContainerStyle.Padding || "0",
    margin: props.ContainerStyle.Margin || "0"
  };
  var CardStyle = {
    width: props.CardStyle.Width || "none",
    height: props.CardStyle.Height || "none",
    backgroundColor: props.CardStyle.BackgroundColor || "",
    background: props.CardStyle.Background || "null",
    aspectRatio: props.CardStyle.AspectRatio || "none",
    padding: props.CardStyle.Padding || "0"
  };
  var slide = (0, _react.useMemo)(function () {
    return [1, 2, 3, 4, 5];
  }, []);
  var length = slide.length; //current represent the center card of the carousel.

  var _useState = (0, _react.useState)(2),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0, _react.useState)([1, 0, 0, 0, 0, 0]),
      _useState4 = _slicedToArray(_useState3, 2),
      toshow = _useState4[0],
      setToShow = _useState4[1]; //initializing state according to the length of props


  (0, _react.useEffect)(function () {
    setToShow(function () {
      var cardlength = props.CardList.length;
      var temp = [1];

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
  }, [props.CardList]); //Next Slide Handler

  var nextSlide = (0, _react.useCallback)(function () {
    //setCurrent to next slide
    setCurrent(function (prevState) {
      return prevState === length - 1 ? 0 : prevState + 1;
    }); //Change the toshow array to change content of carousel

    var temp = _toConsumableArray(toshow);

    var change = temp[0];
    temp[change] = change === 1 ? temp[5] + 1 : temp[change - 1] + 1;
    if (temp[change] === props.CardList.length) temp[change] = 0;
    temp[0] = change === 5 ? 1 : change + 1;
    setToShow(temp);
  }, [length, props.CardList, toshow]); //Previous Slide Handler

  var prevSlide = function prevSlide() {
    //setCurrent to prev slide
    setCurrent(current === 0 ? length - 1 : current - 1); //Change the toshow array to change content of carousel

    var temp = _toConsumableArray(toshow);

    temp[0] = temp[0] === 1 ? 5 : temp[0] - 1;
    var change = temp[0];
    temp[change] = change === 5 ? temp[1] - 1 : temp[change + 1] - 1;
    if (temp[change] === -1) temp[change] = props.CardList.length - 1;
    setToShow(temp);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _Carousel3DModule["default"].CarouselContainer,
    style: ContainerStyle
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: _Carousel3DModule["default"].toggleBtn,
    onClick: prevSlide,
    src: _PrevButton["default"],
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _Carousel3DModule["default"].CardContainer
  }, slide.map(function (obj, indx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: indx,
      className: "".concat(_Carousel3DModule["default"].Card, " ").concat(indx < current && _Carousel3DModule["default"]["prevImg".concat(current - indx)] || indx > current && _Carousel3DModule["default"]["nextImg".concat(indx - current)] || indx === current && _Carousel3DModule["default"]["active"]),
      style: CardStyle
    }, props.CardList[toshow[indx + 1]].element);
  })), /*#__PURE__*/_react["default"].createElement("img", {
    className: _Carousel3DModule["default"].toggleBtn,
    onClick: nextSlide,
    src: _NextButton["default"],
    alt: ""
  }));
};

var _default = Carousel3D;
exports["default"] = _default;