
import { NavLink } from "react-router-dom";
import HouseDoor from "../../UI/Icons/HouseDoor";

const SideBarAdmin = () => {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/admin/users" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/projects" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/licences" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              Licences
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/logs" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor />
              Logs
            </NavLink>
          </li>
        </ul>
      );
};

export default SideBarAdmin;