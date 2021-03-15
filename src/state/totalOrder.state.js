import { useState } from "react";
import { useBetween } from "use-between";

const sharedState = () => {
  const [totalOrder, setTotalOrder] = useState([]);
  return {
    totalOrder,
    setTotalOrder
  };
};

export const totalOrderState = () => {
  const { totalOrder, setTotalOrder } = useBetween(sharedState);
  return {
    totalOrder,
    setTotalOrder
  };
};
