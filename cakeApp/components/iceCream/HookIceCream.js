import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../../redux";

function HookIceCream() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of Icecreams - {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())} >Buy icecream</button>
    </div>
  );
}

export default HookIceCream;
