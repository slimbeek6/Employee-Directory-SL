import { useRef } from "react";
import React, { useRef } from "react";
import { useEmployeeContext } from "../../utils/GlobalState";

function Form() {
  const nameRef = useRef();
  const imgRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const [_, dispatch] = useEmployeeContext();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: nameRef.current.value,
      img: imgRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      dob: dobRef.current.value
    });
      nameRef.current.value = "";
      imgRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      dobRef.current.value = "";
  }

  return (
   <div>
      <h4>Add an Employee:</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input className="form-control" ref={nameRef} name="name" placeholder="Enter name" />
        <input className="form-control" ref={imgRef} name="img" placeholder="Enter img url" />
        <input className="form-control" ref={phoneRef} name="phone" placeholder="Enter phone number" />
        <input className="form-control" ref={emailRef} name="email" placeholder="Enter email address" />
        <input className="form-control" ref={dobRef} name="dob" placeholder="Enter employee date of birth" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to Employee Contact List
        </button>
      </form>
    </div>
  )
}

export default Form;