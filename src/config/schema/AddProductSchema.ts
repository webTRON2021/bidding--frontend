import * as Yup from "yup";
import { getRequiredText } from "../constant/text";
export const AddProductSchema = Yup.object().shape({
  name: Yup.string().required(getRequiredText("name")),
  initialToken: Yup.string().required(getRequiredText("initialToken")),
  minimumTokenRaise: Yup.string().required(
    getRequiredText("minimumTokenRaise")
  ),
  specification: Yup.string().required(getRequiredText(" specification    ")),
  category: Yup.string().required(getRequiredText("category")),
  tokenCurrency: Yup.string().required(getRequiredText("tokenCurrency")),
  brand: Yup.string().required(getRequiredText("brand")),
  startDate: Yup.string().required(getRequiredText("startDate")),
  endDate: Yup.string().required(getRequiredText("endDate")),

  bidStory: Yup.string().required(getRequiredText("bidStory")),
});
