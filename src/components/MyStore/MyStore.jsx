import React from "react";
import "./MyStore.css";
import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyOrange, buyWatermelon } from "../Redux/Fruit/fruitAction";
import { buyPizza, buySandwich, buySoda } from "../Redux/Food/foodAction";
const MyStore = () => {
  const { apple, orange, watermelon } = useSelector((state) => state.fruit);
  const { sandwich, pizza, soda } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>میوه فروشی چهار فصل</h2>
        <h3>تعداد سیب:{apple}</h3>
        <h3>تعداد پرتقال:{orange}</h3>
        <h3>تعداد هندوانه:{watermelon}</h3>
        <button
          className="btnbuy bgclr-G"
          onClick={() => {
            dispatch(buyApple());
          }}
        >
          خرید سیب
        </button>
        <button
          className="btnbuy bgclr-O"
          onClick={() => {
            dispatch(buyOrange());
          }}
        >
          خرید پرتقال
        </button>
        <button
          className="btnbuy bgclr-R"
          onClick={() => {
            dispatch(buyWatermelon());
          }}
        >
          خرید هندوانه
        </button>
      </div>
      <hr />
      <div>
        <h2>فست فودی</h2>
        <h3>تعداد ساندویچ:{sandwich}</h3>
        <h3>تعداد پیتزا:{pizza}</h3>
        <h3>تعداد نوشابه:{soda}</h3>
        <button
          className="btnbuy bgclr-G"
          onClick={() => {
            dispatch(buySandwich());
          }}
        >
          خرید ساندویچ
        </button>
        <button
          className="btnbuy bgclr-O"
          onClick={() => {
            dispatch(buyPizza());
          }}
        >
          خرید پیتزا
        </button>
        <button
          className="btnbuy bgclr-R"
          onClick={() => {
            dispatch(buySoda());
          }}
        >
          خرید نوشابه
        </button>
      </div>
    </div>
  );
};

export default MyStore;
