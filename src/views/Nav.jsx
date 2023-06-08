import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className="topnav responsive">
            <div className="nav-links">
                <Link to="/summary" className="nav-link active">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <div className="dropdown">
                    <button className="dropbtn">
                        Case Studies <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/scrum-values-quiz" className="nav-link">
                            Scrum Values Quiz
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}