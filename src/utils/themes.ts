import { primaryFont } from "./typography";
import { blue, white, black } from "./colors";

export const darkTheme = {
  primaryColor: blue[200],
  secondaryColor: blue[500],
  tertiaryColor: blue[300],
  invertedColor: black[500],
  disabledColor: blue[100],
  textColor: white[500],
  textColorInverted: blue[500],
  textColorDisabled: white[300],
  primaryFont,
};

export const lightTheme = {
  primaryColor: white[400],
  secondaryColor: blue[500],
  tertiaryColor: white[100],
  invertedColor: black[500],
  disabledColor: blue[100],
  textColor: black[500],
  textColorInverted: blue[500],
  textColorDisabled: white[300],
  primaryFont,
};
