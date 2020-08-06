import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "./state/counter/actions";

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state: RootState) => state.counter);
  return (
    <>
      <p>{counterState.value}</p>
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <button onClick={() => dispatch(decrementAction())}>-</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
    </>
  );
};
