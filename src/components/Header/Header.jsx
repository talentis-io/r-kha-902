import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="post/add">AddPost</NavLink>
        </li>
        {/* <li>
          <NavLink to="post/1/edit" end>
            Edit
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="post/1/details">Details</NavLink>
        </li> */}
        {/* <li className="login">login</li> */}
        <li>
            <Login />
          {/* <NavLink to="login">Login</NavLink> */}
        </li>
      </ul>
    </div>
  );
};

export default Header;
