import React from "react";
import FavoriteColor from "./Question2";
import MyButton from "./Question5";
import Counter from "./Question4";
import Greetings from "./Question6";
import Unorderlist from "./Question7";
import InputForm from "./Question8";

const Welcome = () => {
  return (
    <>
      <h1>"Welcome to React!"</h1>
      <hr></hr>
      <FavoriteColor />
      <hr></hr>
      <Counter />
      <hr></hr>
      <MyButton />
      <hr></hr>
      <Greetings />
      <hr></hr>
      <Unorderlist />
      <hr></hr>
      <InputForm />
      <hr></hr>
    </>
  );
};

export default Welcome;
