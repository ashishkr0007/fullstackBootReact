import React, { useEffect } from "react";

import { Link } from "react-router-dom";

export const Home1 = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="jumbotron mt-2">
      <h1 className="display-3">Spring-Boot With React.js</h1>
      <p className="lead">
        This is Simple Full Stack Web-App Developed By Ashish-Kumar Using Spring
        Boot As Backend And React As Front-End
      </p>
      <hr className="my-2" />
      <p>
        It's A Employee Management-webApp User Can Directly Interect With Sql
        DataBase And Can Get, Add, Update and Delete Employee!!
      </p>
      <p className="lead">
        <Link className="btn btn-outline-primary fst-italic" to="/dashboard">
          DASHBOARD
        </Link>
      </p>
    </div>
  );
};
//1:10min
//rafc
