import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppIndicator from "../../UI/Icons/AppIndicator";
import SideBarAnonymous from "./SideBarAnonymous";
import SideBarUser from "./SideBarUser";
import SideBarAdmin from "./SideBarAdmin";

function SideBar() {
  const authInfo = useSelector((state) => state.auth);

  return (
    <main className="sidebar full-height">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px" }}
      >
        <NavLink
          to="/home"
          className="nav-link d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <AppIndicator />
          <span className="fs-4 ml-10">License App</span>
        </NavLink>

        <hr />

        {!authInfo.isAuthenticated && (
          <SideBarAnonymous/>
        )}
        {(authInfo.isAuthenticated && authInfo.roleId === 1) && (
          <SideBarUser/>
        )}
        {(authInfo.isAuthenticated && authInfo.roleId === 2) && (
          <SideBarAdmin/>
        )}
        
        <hr />
        <small>Copyright Serdar AYDIN</small>
      </div>
    </main>
  );
}

export default SideBar;
