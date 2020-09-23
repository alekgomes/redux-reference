import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakes = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakes
  };
};
