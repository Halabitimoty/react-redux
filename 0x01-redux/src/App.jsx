import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DCR" });
  };
  const add = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <>
      <h1>Counter App using Deprecated REDUX</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> + </button>
      <button onClick={add}> add 10</button>
      <button onClick={decrement}> - </button>
    </>
  );
}

export default App;
