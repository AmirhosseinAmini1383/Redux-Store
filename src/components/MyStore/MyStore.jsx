import React, { useState } from "react";
import "./MyStore.css";
import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyOrange, buyWatermelon } from "../Redux/Fruit/fruitAction";
import { buyPizza, buySandwich, buySoda } from "../Redux/Food/foodAction";
const MyStore = () => {
  const [itemCount, setItemCount] = useState({
    apple: 1,
    orange: 1,
    watermelon: 1,
    sandwich: 1,
    pizza: 1,
    soda: 1,
  });
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
        <div>
          <input
            type="number"
            className="buyCount"
            value={itemCount.apple}
            onChange={(e) => {
              setItemCount({ ...itemCount, apple: e.target.value });
            }}
          />
          <button
            className="btnbuy bgclr-G"
            onClick={() => {
              dispatch(buyApple(itemCount.apple));
            }}
          >
            ({itemCount.apple}) خرید سیب
          </button>
          <input
            type="number"
            className="buyCount"
            value={itemCount.orange}
            onChange={(e) => {
              setItemCount({ ...itemCount, orange: e.target.value });
            }}
          />
          <button
            className="btnbuy bgclr-O"
            onClick={() => {
              dispatch(buyOrange(itemCount.orange));
            }}
          >
            ({itemCount.orange}) خرید پرتقال
          </button>
          <input
            type="number"
            className="buyCount"
            value={itemCount.watermelon}
            onChange={(e) => {
              setItemCount({ ...itemCount, watermelon: e.target.value });
            }}
          />

          <button
            className="btnbuy bgclr-R"
            onClick={() => {
              dispatch(buyWatermelon(itemCount.watermelon));
            }}
          >
            ({itemCount.watermelon}) خرید هندوانه
          </button>
        </div>
      </div>
      <hr />
      <div>
        <h2>فست فودی</h2>
        <h3>تعداد ساندویچ:{sandwich}</h3>
        <h3>تعداد پیتزا:{pizza}</h3>
        <h3>تعداد نوشابه:{soda}</h3>
        <div>
          <input
            type="number"
            className="buyCount"
            value={itemCount.sandwich}
            onChange={(e) => {
              setItemCount({ ...itemCount, sandwich: e.target.value });
            }}
          />
          <button
            className="btnbuy bgclr-G"
            onClick={() => {
              dispatch(buySandwich(itemCount.sandwich));
            }}
          >
            ({itemCount.sandwich}) خرید ساندویچ
          </button>

          <input
            type="number"
            className="buyCount"
            value={itemCount.pizza}
            onChange={(e) => {
              setItemCount({ ...itemCount, pizza: e.target.value });
            }}
          />
          <button
            className="btnbuy bgclr-O"
            onClick={() => {
              dispatch(buyPizza(itemCount.pizza));
            }}
          >
            ({itemCount.pizza}) خرید پیتزا
          </button>

          <input
            type="number"
            className="buyCount"
            value={itemCount.soda}
            onChange={(e) => {
              setItemCount({ ...itemCount, soda: e.target.value });
            }}
          />
          <button
            className="btnbuy bgclr-R"
            onClick={() => {
              dispatch(buySoda(itemCount.soda));
            }}
          >
            ({itemCount.soda}) خرید نوشابه
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyStore;
