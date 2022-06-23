import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>iStock</div>
            </Link>
            <Link to="/stock">
                <div>Stock</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    );
};

export default Header;