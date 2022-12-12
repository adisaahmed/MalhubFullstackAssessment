import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not_found_parent">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="not_found_parent_left_parent">
                        <h1 className="not_found_parent_left_parent_h1">
                            <b style={{ color: "#D85A7FFF" }}>4</b>
                            <b style={{ color: "#ED2B33FF" }}>0</b>
                            <b style={{ color: "#D85A7FFF" }}>4</b>
                        </h1>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="not_found_parent_right_parent">
                        <h1 className="not_found_parent_right_parent_h1">
                            We looked everywhere.
                        </h1>

                        <p className="not_found_parent_right_parent_p">
                            Looks like this page is missing. If you still need help, Visit our <Link to="/contact"> Contact Page </Link>
                        </p>

                        <Link to="/" className="not_found_parent_right_parent_button">
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
