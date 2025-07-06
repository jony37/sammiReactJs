// // import "../contact-us/contact-us.css";
// // import { Component } from "react";
// // import ContactComent from "./contact-comment/contact-comment";

// // class ContactUs extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       name: "",
// //       email: "",
// //       number: "",
// //     };
// //   }

// //   // constructor() {
// //   //   super();
// //   //   this.state = {
// //   //     data: [],
// //   //   };
// //   //   this.maxId = 0
// //   // }

// //   // addForm = (item) => {
// //   //   this.setState(({ data }) => ({
// //   //     data: [...data, { ...item, id: this.maxId++}],
// //   //   }));
// //   // };

// //   // onDelete = (id) => {
// //   //   console.log(id);

// //   //   this.setState(({data}) => ({
// //   //     data: data.filter((c) => c.id !== id),
// //   //   }))
// //   // };

// //   // addFilter = () => {
// //   //   this.setState(({data}) => ({
// //   //     data: [...data].sort((a, b) => a.name.localeCompare(b.name))
// //   //   }))
// //   // }

// //   chengeInput = (e) => {
// //     this.setState({
// //       [e.target.name]: e.target.value,
// //       [e.target.email]: e.target.value,
// //       [e.target.number]: e.target.value,
// //     });
// //   };

// //   addFormHendlar = () => {
// //     this.props.addForm({
// //       name: this.state.name,
// //       email: this.state.email,
// //       number: this.state.number,
// //     });
// //     this.setState({
// //       name: "",
// //       email: "",
// //       number: "",
// //     });
// //   };

// //   render() {
// //     const { name, email, number } = this.state;
// //     const { data, onDelete, addFilter } = this.props;

// //     return (
// //       <div className="center">
// //         <div className="coment-box">
// //           <h1 className="coment-box__title">Contact Us</h1>
// //           <p>do you have a question?</p>

// //           <form action="">
// //             <div className="all-input">
// //               <div>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter your name"
// //                   className="form-control"
// //                   name="name"
// //                   onChange={this.chengeInput}
// //                   value={name}
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter your email"
// //                   className="form-control"
// //                   name="email"
// //                   onChange={this.chengeInput}
// //                   value={email}
// //                 />
// //               </div>
// //               <div>
// //                 <input
// //                   type="number"
// //                   placeholder="Enter your number"
// //                   className="form-control"
// //                   name="number"
// //                   onChange={this.chengeInput}
// //                   value={number}
// //                 />
// //               </div>
// //             </div>
// //             <div className="all-btns mt-3 mb-4">
// //               <button
// //                 type="button"
// //                 className="btn btn btn-primary w-25"
// //                 onClick={this.addFormHendlar}
// //               >
// //                 Add
// //               </button>
// //               <button
// //                 type="button"
// //                 className="btn btn btn-primary w-25"
// //                 onClick={addFilter}
// //               >
// //                 Filter
// //               </button>
// //             </div>
// //           </form>

// //           {data.map((item) => (
// //             <ContactComent
// //               name={item.name}
// //               email={item.email}
// //               number={item.number}
// //               key={item.id}
// //               onDelete={() => onDelete(item.id)}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default ContactUs;

// // import React, { useState, useCallback, useEffect } from "react";

// // const App = () => {
// //   const [count, setCount] = useState(0);

// //   const handleClick = useCallback(() => {
// //     console.log("Button clicked");
// //   }, [count]); // 🔁 faqat count o'zgarganda funksiya qayta yaratiladi

// //   useEffect(() => {
// //     console.log("🔄 handleClick function recreated");
// //   }, [handleClick]);

// //   return (
// //     <div className="text-center mt-5">
// //       <p>Count: {count}</p>
// //       <button onClick={handleClick} className="btn btn-outline-danger">Click Me</button>
// //       <button onClick={() => setCount(count + 1)} className="btn btn-outline-dark">Callback</button>
// //     </div>
// //   );
// // };

// // export default App;


// import React, { Component } from "react";

// class Zadach extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//     };
//   }

//   componentDidMount() {
//     console.log("Mount");
//   }

//   componentWillUnmount() {
//     console.log("Unmount");
//   }

//   setTitle = (e) => {
//     this.setState({
//       title: e.target.value,
//     });
//   };

//   addTitle = () => {
//     document.title = this.state.title
//   }

//   render() {
//     return (
//       <div>
//         <h2>Component Created</h2>
//         <button className="btn btn-danger mt-3" onClick={this.props.onDelete}>
//           Delete
//         </button>
//         <div className="d-flex">
//           <input
//             type="text"
//             className="d-block mt-3"
//             placeholder="title"
//             onChange={this.setTitle}
//           />
//         </div>
//         <button className="btn btn-success mt-3" onClick={this.addTitle}>add title</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     show: true,
//   };

//   handleDelete = () => {
//     this.setState({ show: false });
//   };

//   render() {
//     return (
//       <div>{this.state.show && <Zadach onDelete={this.handleDelete} />}</div>
//     );
//   }
// }

// export default App;
