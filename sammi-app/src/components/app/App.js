import { Component } from "react";
import "../app/App.css";

class User extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      count: 10,
    };
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
      count: this.state.count = 0,
    });
  };

  render() {
    const { firstName, lastName, link } = this.props;

    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h4>
            Mening ismim {firstName}, sharifim {lastName}
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
            <button type="button" className="btn btn-warning" onClick={this.zeroFun}>
              sbros
            </button>
          </div>
          <p className="coutn">{this.state.count}</p>
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <User firstName="Jonpolat" lastName="Ravshanov" link="instagram.com" />
      <User firstName="Jahongir" lastName="joxa" link="instagram.com" />
    </div>
  );
};

export default App;
