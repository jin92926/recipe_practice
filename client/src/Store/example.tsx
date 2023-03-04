import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "Store/counterReducer";
import { CounterState } from "Store/counterReducer";

interface RootState {
  counter: CounterState;
}

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(10));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByAmount}>+10</button>
    </div>
  );
}

export default Counter;
