import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/hh">hh</Link>
                </li>

            </ul>
        </div>
    )
};
export default Nav
