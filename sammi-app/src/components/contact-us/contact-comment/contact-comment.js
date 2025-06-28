import { Component } from "react";
import "../contact-comment/contact-comment.css";

class ContactComent extends Component {
  render() {
    const { name, email, number, onDelete } = this.props;

    return (
      <div>
        <div className="contact-response">
          <h3 className="name">{name}</h3>
          <p className="email">{email}</p>
          <p className="number">{number}</p>
          <button
            type="button"
            className="btn btn-danger w-25"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ContactComent;
