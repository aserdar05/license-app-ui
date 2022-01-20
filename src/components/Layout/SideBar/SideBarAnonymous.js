
import { HouseDoor } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { PersonFill, PersonPlusFill } from "react-bootstrap-icons";

function SideBarAnonymous() {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/home" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <HouseDoor className="mr-5" size={20} />
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <PersonFill className="mr-5" size={20} />
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/register" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <PersonPlusFill className="mr-5" size={20} />
          Register
        </NavLink>
      </li>
    </ul>
  );
}

export default SideBarAnonymous;
