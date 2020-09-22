import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";

const Cake = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h1>Cakes - {numOfCakes}</h1>
      <button onClick={buyCake}>Buy cake</button>
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
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
