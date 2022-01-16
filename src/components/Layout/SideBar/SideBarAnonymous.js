
import HouseDoor from "../../UI/Icons/HouseDoor";
import { NavLink } from "react-router-dom";

function SideBarAnonymous() {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/home" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <HouseDoor />
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <HouseDoor />
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/register" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
          <HouseDoor />
          Register
        </NavLink>
      </li>
    </ul>
  );
}

export default SideBarAnonymous;
