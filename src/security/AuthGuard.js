import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = (props) => {
  const navigate = useNavigate();
  const authInfo = useSelector((state) => state.auth);
  const roleId = authInfo.userData.roleId;
  useEffect(() => {
    if (roleId != props.roleId) {
      navigate("/login");
    }
  }, []);

  return (
      <Fragment>
          { props.children }
      </Fragment>
  )
};

export default AuthGuard;
