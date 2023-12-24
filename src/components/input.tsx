import { InputType } from "zlib";
import { InputContainer } from "../styles/components/input";

type Props = {
  placeholder?: string;
  handleOnChange: (event) => void;
};

export function InputComponent({ placeholder = "", handleOnChange }: Props) {
  return (
    <InputContainer
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
