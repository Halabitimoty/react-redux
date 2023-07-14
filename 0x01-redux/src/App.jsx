import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h1>Counter App using Deprecated REDUX</h1>
      <h2>{counter}</h2>
    </>
  );
}

export default App;
