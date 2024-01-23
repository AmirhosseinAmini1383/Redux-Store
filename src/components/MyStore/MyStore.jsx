import React from "react";
import { connect } from "react-redux";
import { buyApple, buyOrange, buyWatermelon } from "../Redux/Fruit/FruitAction";
import "./MyStore.css";
const MyStore = ({
  apple,
  orange,
  watermelon,
  BuyApple,
  BuyOrange,
  BuyWatermelon,
}) => {
  return (
    <div>
      <div>
        <h2>میوه فروشی چهار فصل</h2>
        <h3>تعداد سیب:{apple}</h3>
        <h3>تعداد پرتقال:{orange}</h3>
        <h3>تعداد هندوانه:{watermelon}</h3>
      </div>
      <div>
        <button className="btnbuy bgclr-G" onClick={BuyApple}>
          خرید سیب
        </button>
        <button className="btnbuy bgclr-O" onClick={BuyOrange}>
          خرید پرتقال
        </button>
        <button className="btnbuy bgclr-R" onClick={BuyWatermelon}>
          خرید هندوانه
        </button>
      </div>
    </div>
  );
};
const stateToProps = (state) => {
  return {
    apple: state.apple,
    orange: state.orange,
    watermelon: state.watermelon,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    BuyApple: () => dispatch(buyApple()),
    BuyOrange: () => dispatch(buyOrange()),
    BuyWatermelon: () => dispatch(buyWatermelon()),
  };
};

export default connect(stateToProps, dispatchToProps)(MyStore);
