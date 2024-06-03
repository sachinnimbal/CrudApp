import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
      toast.success("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center">Add User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="FirstName"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="LastName"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type={"email"}
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <Link to="/" className="btn btn-secondary mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
