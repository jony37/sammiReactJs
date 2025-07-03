import { useState, Component, Fragment } from "react";
import "../app/App.css";

class User extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      count: 10,
      age: "",
    };

    // this.incrFun = this.incrFun.bind(this)
  }

  incrFun = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decFun = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  zeroFun = () => {
    this.setState({
      count: (this.state.count = 0),
    });
  };

  changeHendlar = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  componentDidMount() {
    console.log("mounting");
  }

  componentDidUpdate () {
    document.title = `Counter: ${this.state.count}`
    console.log("Updatate");
    
  }

  render() {
    const { firstName, lastName, link } = this.props;
    const { age, count } = this.state;

    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h4>
            Mening ismim {firstName}, sharifim {lastName}, yoshim - {age}
          </h4>
          <a href={link}>Youtub kanalim</a>
          <div className="mt-5">
            <button
              type="button"
              className="btn btn-success btn-incr"
              onClick={this.incrFun}
            >
              incriment
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.decFun}
            >
              dec
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.zeroFun}
            >
              sbros
            </button>
          </div>
          <p className="coutn">{count}</p>

          <form>
            <span>Yoshingiz</span>
            <input
              type="text"
              className="form-control"
              onChange={this.changeHendlar}
            />
          </form>
        </div>
      </div>
    );
  }
}

// const User = ({ firstName, lastName, link }) => {
//   // const [state, setState] = useState({
//   //   counter: 0,
//   //   isLogin: false,
//   // });

//   // const onDecriment = () => {
//   //   setState(prevState => ({ ...prevState, counter: prevState.counter +1 }))
//   // };

//   // const onRestart = () => {};

//   // const onToggLeLogin = () => {};

//   const [counter, setCount] = useState(0);
//   const [isLogin, setLogin] = useState(false);

//   const onIcrement = () => {
//     setCount((prevContere) => prevContere + 1);
//     setCount((prevContere) => prevContere + 1);
//   };

//   const onDecriment = () => {
//     setCount(counter - 1);
//   };

//   const onRestart = () => {
//     setCount(0);
//   };

//   const onToggLeLogin = () => {
//     setLogin((prevState) => !prevState);
//   };

//   return (
//     <div className="w-50 mx-auto">
//       <div className="border p-3 mt-5">
//         <h1>
//           Mening ismim {firstName}, sharifim - {lastName}
//         </h1>
//         <a href={link}>Youtube kanalim</a>
//         <p className="text-center">{counter}</p>
//         <div className="d-flex justify-content-center">
//           <button className="btn btn-success" onClick={onIcrement}>
//             +
//           </button>
//           <button className="btn btn-danger mx-2" onClick={onDecriment}>
//             -
//           </button>
//           <button className="btn btn-dark mx-2" onClick={onRestart}>
//             0
//           </button>
//         </div>

//         {isLogin ? <p className="text-center mt-3">LOGIN</p> : null}
//         <div className="d-flex justify-content-center">
//           <button className="btn btn-outline-primary" onClick={onToggLeLogin}>
//             TOGGLE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <Fragment>
      <User firstName={"Jony"} lastName={"Ravshanov"} link={"youtube.com"} />
      <User firstName={"Jony"} lastName={"Ravshanov"} link={"youtube.com"} />
    </Fragment>
  );
};

export default App;
