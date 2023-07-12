import { createContext, Dispatch, SetStateAction } from "react";

export interface CurrentStateType {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
}
export const CurrentContext = createContext<CurrentStateType>({
  current: "",
  setCurrent: () => {},
});
