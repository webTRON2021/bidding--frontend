import { CgDanger } from "react-icons/cg";

interface IProps {
  message?: string;
}

const Alert = (props: IProps) => {
  let { message } = props;
  message = message || "Please verify your profile before placing bid";
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <CgDanger className="me-2" />
      <div>{message}</div>
    </div>
  );
};

export default Alert;
