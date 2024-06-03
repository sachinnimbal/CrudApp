import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();

  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center">User Details</h2>
          <div className="card">
            <div className="card-header">
              <b>Details of user id :</b> {user.id}
            </div>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">
                <b>First Name:</b> {user.firstName}
              </li>
              <li className="list-group-item">
                <b>Last Name:</b> {user.lastName}
              </li>
              <li className="list-group-item">
                <b>Email Address:</b> {user.email}
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-secondary my-2">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
