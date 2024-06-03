import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getUser/${id}`);
      setUsers(result.data);
    } catch (error) {
      console.error("There was an error loading the user!", error);
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/updateUser/${id}`, user);
      navigate("/");
      toast.success("User updated successfully!");
    } catch (error) {
      console.error("There was an error updating the user!", error);
      toast.error("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center">Edit User</h2>
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
              Update
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
