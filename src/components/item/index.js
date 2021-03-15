import { useState, useEffect } from "react";
import { totalOrderState } from "../../state/totalOrder.state";

import "./item.style.css";
export const Item = (props) => {
  const { totalOrder, setTotalOrder } = totalOrderState();
  const { image, title, desc } = props;
  const [quantity, setQuantity] = useState(0);
  const [orderInformation, setOrderInformation] = useState([]);

  useEffect(() => {
    setTotalOrder(
      removeEmptyArray(removeButLast([...totalOrder, orderInformation]))
    );
  }, [orderInformation]);

  useEffect(() => {
    setOrderInformation([title, quantity]);
  }, [quantity]);

  // Modify quantity

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  const removeOne = () => {
    if (quantity === 0) {
      alert("you can not remove another product");
      return;
    }
    setQuantity(quantity - 1);
  };

  //Check to avoid element repetition

  const removeEmptyArray = (arr) => {
    if (arr[0].length === 0) arr.splice(0, 1);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] === 0) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  const removeButLast = (arr) => {
    let auxArr = arr;
    if (arr.length === 0) {
      return auxArr;
    }
    let auxTitle = arr[arr.length - 1][0];
    if (checkPrevious(arr)) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (auxTitle === arr[i - 1][0]) {
          auxArr.splice(i - 1, 1);
          if (checkPrevious(arr) === false) {
            return auxArr;
          }
        }
      }
    }
    return auxArr;
  };

  const checkPrevious = (arr) => {
    let auxTitle = arr[arr.length - 1][0];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i - 1 < 0) {
        console.log("1st");
        return false;
      }
      if (auxTitle === arr[i - 1][0]) {
        console.log("2nd");
        return true;
      }
    }
    console.log("3rd");
    return false;
  };

  return (
    <div className="main">
      <img className="img" src={image} alt="" />
      <h4 className="title"> {title} </h4>
      <h5 className="desc"> {desc} </h5>
      <div className="quantity-control">
        <h1 className="remove" onClick={() => removeOne()}>
          -
        </h1>
        <label className="quantity">{quantity}</label>
        <h1 className="add" onClick={() => addOne()}>
          +
        </h1>
      </div>
    </div>
  );
};
