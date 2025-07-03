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

