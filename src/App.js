import "./styles.css";
import { eidChoco } from "./utilities/data/eidSweets/eidSweets";
import { ItemTemplate } from "./template/ItemTemplate";
import { totalOrderState } from "./state/totalOrder.state";

export default function App() {
  const { totalOrder, setTotalOrder } = totalOrderState();
  //console.log(totalOrder);
  return (
    <div className="App">
      <ItemTemplate data={eidChoco} />
      {totalOrder.map((data) => {
        return <p>{`${data[0]}; Quantity: ${data[1]}`}</p>
        //console.log(data);
      })}
    </div>
  );
}
