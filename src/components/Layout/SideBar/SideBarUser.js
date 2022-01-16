
import { NavLink } from "react-router-dom";
import HouseDoor from "../../UI/Icons/HouseDoor";

const SideBarUser = () => {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/user/profile" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              User Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/projects" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              My Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/licences" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              Licences
            </NavLink>
          </li>
        </ul>
      );
};

export default SideBarUser;