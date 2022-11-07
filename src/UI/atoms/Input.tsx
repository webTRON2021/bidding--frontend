import { InputHTMLAttributes, ReactNode, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  variant?: string;
  error?: boolean;
  label?:string;
  ref?:any
}

export default ({ icon, children, variant,ref ,...rest }: InputProps) => {
  // state for store password
  const [showPassword, setShowPassword] = useState<boolean>(true);

  // function to toggle password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="input_section">
      {variant === "password" ? (
        <div className="input_box">
          <div className="icon">{icon}</div>
          <input type={showPassword ? "password" : "text"} {...rest} ref={ref} />
          <div className="icon" onClick={togglePassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
      )
        : (
          <div className="input_box">
            <div className="icon">{icon}</div>
            <input type={variant} {...rest} />
          </div>
        )
      }
    </section >
  );
};
