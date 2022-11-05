import { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "../atoms/Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  loading?: boolean;
  children?: ReactNode;
  useFor?: string;
}

export default ({
  variant,
  loading,
  children,
  useFor,
  ...rest
}: ButtonProps) => {
  let style = variant;
  switch (style) {
    case "primary":
      style = "primary_btn";
      break;
    case "secondary":
      style = "secondary_btn";
      break;
    case "primary_outline":
      style = "primary_outline_btn";
      break;
    case "secondary_outline":
      style = "secondary_outline_btn";
      break;
    case "primary_white_outline":
      style = "primary_white_outline_btn";
      break;
    default:
      style = "primary_btn";
      break;
  }
  return (
    <section
      className={`button_section ${
        useFor === "pagination" ? "pagination_btn" : ""
      }`}
    >
      <button {...rest} className={style} disabled={loading}>
        {loading ? (
          <div className="d-flex align-item-center m-auto">
            <Spinner /> &nbsp; Loading..
          </div>
        ) : (
          children
        )}
      </button>
    </section>
  );
};
