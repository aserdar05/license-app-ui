import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthGuard = (props) => {
  const navigate = useNavigate();
  const authInfo = useSelector((state) => state.auth);
  const roleId = !authInfo.userData ? null : authInfo.userData.roleId;
  useEffect(() => {
    if (props && roleId !== +props.roleId) {
      navigate("/login");
    }
  }, [roleId, props, navigate]);

  return (
      <Fragment>
          { props.children }
      </Fragment>
  )
};

export default AuthGuard;
