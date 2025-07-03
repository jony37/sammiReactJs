// import "../contact-us/contact-us.css";
// import { Component } from "react";
// import ContactComent from "./contact-comment/contact-comment";

// class ContactUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       number: "",
//     };
//   }

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     data: [],
//   //   };
//   //   this.maxId = 0
//   // }

//   // addForm = (item) => {
//   //   this.setState(({ data }) => ({
//   //     data: [...data, { ...item, id: this.maxId++}],
//   //   }));
//   // };

//   // onDelete = (id) => {
//   //   console.log(id);

//   //   this.setState(({data}) => ({
//   //     data: data.filter((c) => c.id !== id),
//   //   }))
//   // };

//   // addFilter = () => {
//   //   this.setState(({data}) => ({
//   //     data: [...data].sort((a, b) => a.name.localeCompare(b.name))
//   //   }))
//   // }

//   chengeInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//       [e.target.email]: e.target.value,
//       [e.target.number]: e.target.value,
//     });
//   };

//   addFormHendlar = () => {
//     this.props.addForm({
//       name: this.state.name,
//       email: this.state.email,
//       number: this.state.number,
//     });
//     this.setState({
//       name: "",
//       email: "",
//       number: "",
//     });
//   };

//   render() {
//     const { name, email, number } = this.state;
//     const { data, onDelete, addFilter } = this.props;

//     return (
//       <div className="center">
//         <div className="coment-box">
//           <h1 className="coment-box__title">Contact Us</h1>
//           <p>do you have a question?</p>

//           <form action="">
//             <div className="all-input">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="form-control"
//                   name="name"
//                   onChange={this.chengeInput}
//                   value={name}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter your email"
//                   className="form-control"
//                   name="email"
//                   onChange={this.chengeInput}
//                   value={email}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="number"
//                   placeholder="Enter your number"
//                   className="form-control"
//                   name="number"
//                   onChange={this.chengeInput}
//                   value={number}
//                 />
//               </div>
//             </div>
//             <div className="all-btns mt-3 mb-4">
//               <button
//                 type="button"
//                 className="btn btn btn-primary w-25"
//                 onClick={this.addFormHendlar}
//               >
//                 Add
//               </button>
//               <button
//                 type="button"
//                 className="btn btn btn-primary w-25"
//                 onClick={addFilter}
//               >
//                 Filter
//               </button>
//             </div>
//           </form>

//           {data.map((item) => (
//             <ContactComent
//               name={item.name}
//               email={item.email}
//               number={item.number}
//               key={item.id}
//               onDelete={() => onDelete(item.id)}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ContactUs;
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
