import React, { useState, useRef } from "react";
import "./style.css";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState({
    cardOne: "",
    cardTwo: "",
    cardThree: "",
    cardFour: "",
  });

  const cardInputRefOne = useRef();
  const cardInputRefTwo = useRef();
  const cardInputRefThree = useRef();
  const cardInputRefFour = useRef();

  const handleChange = (e) => {
    if (e.target.id === "one") {
      setCardNumber({ ...cardNumber, cardOne: e.target.value });
      console.log(cardNumber.cardOne);
      if (cardNumber.cardOne.length === 3) {
        cardInputRefTwo.current.focus();
      }
    } else if (e.target.id === "two") {
      setCardNumber({ ...cardNumber, cardTwo: e.target.value });
      console.log(cardNumber.cardTwo);
      if (cardNumber.cardTwo.length === 3) {
        cardInputRefThree.current.focus();
      }
    } else if (e.target.id === "three") {
      setCardNumber({ ...cardNumber, cardThree: e.target.value });
      console.log(cardNumber.cardThree);
      if (cardNumber.cardThree.length === 3) {
        cardInputRefFour.current.focus();
      }
    } else {
      setCardNumber({ ...cardNumber, cardFour: e.target.value });
      console.log(cardNumber.cardFour);
      if (cardNumber.cardFour.length === 3) {
        cardInputRefFour.current.blur();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardNumber);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form_input"
        id="one"
        type="number"
        ref={cardInputRefOne}
        onChange={handleChange}
      ></input>
      <input
        className="form_input"
        id="two"
        type="number"
        ref={cardInputRefTwo}
        onChange={handleChange}
      ></input>
      <input
        className="form_input"
        id="three"
        type="number"
        ref={cardInputRefThree}
        onChange={handleChange}
      ></input>
      <input
        className="form_input"
        id="four"
        type="number"
        ref={cardInputRefFour}
        onChange={handleChange}
      ></input>
      <button className="form_button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CardForm;
