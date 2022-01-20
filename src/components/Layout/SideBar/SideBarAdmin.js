
import { NavLink } from "react-router-dom";
import { FileEarmarkMedical, HouseDoor, PersonWorkspace, ClipboardData } from "react-bootstrap-icons";

const SideBarAdmin = () => {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/admin/users" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <HouseDoor className="mr-10" size={20} />
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/projects" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <PersonWorkspace className="mr-10" size={20} />
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/licences" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <FileEarmarkMedical className="mr-10" size={20} />
              Licences
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/logs" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <ClipboardData className="mr-10" size={20} />
              Logs
            </NavLink>
          </li>
        </ul>
      );
};

export default SideBarAdmin;