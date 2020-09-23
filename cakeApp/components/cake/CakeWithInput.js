import React, {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";

const Cake = ({ numOfCakes, buyCake }) => {
    const [cakes, setCakes] = useState(1)
  return (
    <div>
      <h1>Cakes - {numOfCakes}</h1>
      <input type="text" value={cakes} onChange={(e) => setCakes(e.target.value)}/>
      <button onClick={() => buyCake(cakes)}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cakes) => {
      dispatch(buyCake(cakes));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);