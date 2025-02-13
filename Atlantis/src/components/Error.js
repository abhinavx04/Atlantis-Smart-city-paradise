import React from "react";
import { useLocation } from "react-router-dom"
import "./css/error.css";


function Error() {
  let location = useLocation();
  return (
    <React.Fragment>
      <div className="error">
        <p className="error-text">ERROR 404</p>
        <p className="error-text">{location.pathname} does not exist</p>
        <p className="error-text">The page you are looking for either does not exist or is restricted. Please go back and try again.</p>
      </div>
    </React.Fragment >
  );
}

export default Error;