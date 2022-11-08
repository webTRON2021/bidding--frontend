import * as Yup from "yup";
import text, { getRequiredText } from "../constant/text";
export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required(getRequiredText("firstName")),
  lastName: Yup.string().required(getRequiredText("lastName")),

  gender: Yup.string().required(getRequiredText(" gender ")),
  dob: Yup.string().required(getRequiredText("dob")),

  email: Yup.string().email(text.EMAIL_VALID).required(text.EMAIL_REQUIRED),
  password: Yup.string()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      text.PASSWORD_SUGGESTION
    )
    .required(text.PASSWORD_REQUIRED),
  recoveryEmail: Yup.string().email(text.EMAIL_VALID).required(getRequiredText("recoveryEmail")),
  phone: Yup.string()
    .min(10)
    .max(10)
    .matches(/^[9][678][0-9]{8}$/, "Invalid phone number format")
    .required(getRequiredText("phone")),
});
