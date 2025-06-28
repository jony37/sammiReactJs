import { Component } from "react";
import "../app/App.css";
import ContactUs from "../contact-us/contact-us";
import { v4 as uuidv4 } from "uuid";

// class User extends Component {
//   constructor(pros) {
//     super(pros);
//     this.state = {
//       count: 10,
//       age: "",
//     };

//     // this.incrFun = this.incrFun.bind(this)
//   }

//   incrFun = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   decFun = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   zeroFun = () => {
//     this.setState({
//       count: (this.state.count = 0),
//     });
//   };

//   changeHendlar = (e) => {
//     this.setState({
//       age: e.target.value,
//     });
//   };

//   render() {
//     const { firstName, lastName, link } = this.props;
//     const { age, count } = this.state;

//     return (
//       <div className="w-50 mx-auto">
//         <div className="border p-3 mt-5">
//           <h4>
//             Mening ismim {firstName}, sharifim {lastName}, yoshim - {age}
//           </h4>
//           <a href={link}>Youtub kanalim</a>
//           <div className="mt-5">
//             <button
//               type="button"
//               className="btn btn-success btn-incr"
//               onClick={this.incrFun}
//             >
//               incriment
//             </button>
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={this.decFun}
//             >
//               dec
//             </button>
//             <button
//               type="button"
//               className="btn btn-warning"
//               onClick={this.zeroFun}
//             >
//               sbros
//             </button>
//           </div>
//           <p className="coutn">{count}</p>

//           <form>
//             <span>Yoshingiz</span>
//             <input
//               type="text"
//               className="form-control"
//               onChange={this.changeHendlar}
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, { ...item, id: uuidv4() }],
    }));    
  };

  onDelete = (id) => {
    console.log(id);
    
    this.setState(({data}) => ({
      data: data.filter((c) => c.id !== id),
    }))
  };

  
  addFilter = () => {
    this.setState(({data}) => ({
      data: [...data].sort((a, b) => a.name.localeCompare(b.name))
    }))
  }

  render() {
    return (
      <div>
        <ContactUs data={this.state.data} addForm={this.addForm} onDelete = {this.onDelete} addFilter ={this.addFilter}/>
      </div>
    );
  }
}

export default App;
