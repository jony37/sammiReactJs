import { useState, Fragment } from "react";
import "../app/App.css";

const User = ({ firstName, lastName, link }) => {
  // const [state, setState] = useState({
  //   counter: 0,
  //   isLogin: false,
  // });

  // const onDecriment = () => {
  //   setState(prevState => ({ ...prevState, counter: prevState.counter +1 }))
  // };

  // const onRestart = () => {};

  // const onToggLeLogin = () => {};


  const [counter, setCount] = useState(0);
  const [isLogin, setLogin] = useState(false);

  const onIcrement = () => {
    setCount((prevContere) => prevContere + 1);
    setCount((prevContere) => prevContere + 1);
  };

  const onDecriment = () => {
    setCount(counter - 1);
  };

  const onRestart = () => {
    setCount(0);
  };

  const onToggLeLogin = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1>
          Mening ismim {firstName}, sharifim - {lastName}
        </h1>
        <a href={link}>Youtube kanalim</a>
        <p className="text-center">{counter}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIcrement}>
            +
          </button>
          <button className="btn btn-danger mx-2" onClick={onDecriment}>
            -
          </button>
          <button className="btn btn-dark mx-2" onClick={onRestart}>
            0
          </button>
        </div>

        {isLogin ? <p className="text-center mt-3">LOGIN</p> : null}
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary" onClick={onToggLeLogin}>
            TOGGLE
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Fragment>
      <User firstName={"Jony"} lastName={"Ravshanov"} link={"youtube.com"} />
      <User firstName={"Jony"} lastName={"Ravshanov"} link={"youtube.com"} />
    </Fragment>
  );
};

export default App;
