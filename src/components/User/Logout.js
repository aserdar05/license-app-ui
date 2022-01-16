import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";

const Logout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.logout());
    props.onLogoutSuccess();
  }, [props, dispatch]);

  return <LoadingSpinner />
};

export default Logout;
