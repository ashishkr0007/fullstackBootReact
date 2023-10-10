import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

export default function Home() {
  useEffect(() => {
    document.title = "Employees";
  }, []);
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${base_url}/users`);
    setUsers(result.data);
    toast.success("User Loded Successfully", {
      position: "top-center",
      toastId: "success1",
    });
  };

  const deleteUser = async (id) => {
    await axios.delete(`${base_url}/user/${id}`);

    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-light">
          <thead>
            <tr className="table-info font-monospace">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary fst-italic mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2 fst-italic"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2 fst-italic"
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
    </div>
  );
}
