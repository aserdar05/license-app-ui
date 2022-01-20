
import { PersonCircle,  FileEarmarkMedical, PersonWorkspace } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const SideBarUser = () => {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/user/profile" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <PersonCircle className="mr-10" size={24}/>
              User Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/projects" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <PersonWorkspace className="mr-10" size={20} />
              My Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/licences" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link text-white'}>
              <FileEarmarkMedical className="mr-10" size={20} />
              Licences
            </NavLink>
          </li>
        </ul>
      );
};

export default SideBarUser;