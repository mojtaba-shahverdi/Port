import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(false);

  const handleChangeInputName = (event) => {
    setName(event.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setErrors({
        ...errors,
        email: null,
      });
    } else {
      setErrors({
        ...errors,
        email: "Invalid Email",
      });
    }
  };
  const handleChangeInputTextArea = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    console.log("name", name);
    console.log("email", email);
    console.log("description", description);
  };

  return (
    <div className="Contact">
      <div className="Form">
        <h3>Contact Form</h3>
        <div className="formControl">
          <input
            onChange={handleChangeInputName}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="formControl">
          <input
            onChange={handleChangeInputEmail}
            type="email"
            placeholder="Email"
          />
          <br />
          {errors.email && <span className="errorSpan">{errors.email}</span>}
        </div>
        <div onChange={handleChangeInputTextArea} className="formControl">
          <textarea placeholder="Message"></textarea>
        </div>
        <div className="formControl">
          <input type="submit" className="btnSubmit" onClick={handleSubmit} />
          {message && (
            <h3 className="submitted">
              Request Submitted, i'll asnwer quickly
            </h3>
          )}
        </div>
      </div>
      <div className="Info">
        <h1>Contact Information</h1>
        <p>mojtaba0shahverdi@gmail.com</p>
        <p>my.indeed.com/p/mojtabas-mjmy649</p>
        <h1>Follow me</h1>
        <div>
          <i className="fa fa-github"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
