
import { useDispatch } from "react-redux";
import { alertActions } from "../store/index";

function useAlert(){
    const dispatch = useDispatch();
    const addAlert = (type, message) => {
      dispatch(alertActions.show({
          type: type,
          message: message
      }));
    };
    const removeAlert = () => {        
      dispatch(alertActions.hide());
    };

    return [
        addAlert,
        removeAlert
    ];
}


export default useAlert;