import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'

export default function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = useCallback(async () => {
    const result = await axios.get("http://localhost:8080/allUsers");
    setUsers(result.data);
    if ($.fn.DataTable.isDataTable("#userTable")) {
      $("#userTable").DataTable().destroy();
    }
    initializeDataTable();
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axios.delete(`http://localhost:8080/deleteUser/${id}`);
      toast.success("User deleted successfully!");
      loadUsers();
    }
  };

  const initializeDataTable = () => {
    $(document).ready(function () {
      $("#userTable").DataTable();
    });
  };

  useEffect(() => {
    if (users.length > 0) {
      initializeDataTable();
    }
  }, [users]);

  return (
    <div className="container">
      <div className="py-4">
        {users.length > 0 ? (
          <div className="table-responsive">
            <table id="userTable" className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-start" scope="col">
                    Sl No.
                  </th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th className="text-center" scope="row">
                      {index + 1}
                    </th>
                    <td className="text-start">{user.firstName}</td>
                    <td className="text-start">{user.lastName}</td>
                    <td className="text-start">{user.email}</td>
                    <td>
                      <Link
                        to={`/viewUser/${user.id}`}
                        className="btn btn-sm btn-secondary mx-2"
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-sm btn-primary mx-2"
                        to={`/editUser/${user.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger mx-2"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert alert-info text-center" role="alert">
            No users available.
          </div>
        )}
      </div>
    </div>
  );
}
