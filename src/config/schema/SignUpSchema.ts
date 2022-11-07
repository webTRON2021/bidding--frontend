import * as Yup from "yup";
import { getRequiredText } from "../constant/text";
export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required(getRequiredText("firstName")),
    lastName: Yup.string().required(getRequiredText("lastName")),
    password: Yup.string().required(getRequiredText("password")),
    gender: Yup.string().required(getRequiredText(" gender ")),
    dob: Yup.string().required(getRequiredText("dob")),
    recoveryEmail: Yup.string().required(getRequiredText("recoveryEmail")),
    phone: Yup.string().required(getRequiredText("phone")),
    
  
});
