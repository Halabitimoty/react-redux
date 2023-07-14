import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const add = () => {
    dispatch(actions.add_10(10));
  };
  return (
    <>
      <h1>Counter App using REDUX TOOLKIT</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> + </button>
      <button onClick={add}> add 10</button>
      <button onClick={decrement}> - </button>
    </>
  );
}

export default App;
