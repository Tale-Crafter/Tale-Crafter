import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
return (
<div>
    <h1>Homepage</h1>
    <ul>
        <li>
            <Link to="/login">
            LoginOne
            </Link>
        </li>
        <li>
            <Link to="/ForgotPasswordOne">
            ForgotPasswordOne
            </Link>
        </li>
        <li>
            <Link to="/ForgotPasswordTwo">
            ForgotPasswordTwo
            </Link>
        </li>
        <li>
            <Link to="/ForgotPasswordThree">
            ForgotPasswordThree
            </Link>
        </li>
        <li>
            <Link to="/register">
            Register
            </Link>
        </li>
    </ul>
</div>
);
};
export default Home;