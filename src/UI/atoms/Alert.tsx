import {CgDanger} from "react-icons/cg";

const Alert=()=>{
    return (
      <div className="alert alert-danger d-flex align-items-center" role="alert">
        <CgDanger className="me-2" />
        <div>Please verify your profile before placing bid</div>
      </div>
    );
}

export default Alert;


