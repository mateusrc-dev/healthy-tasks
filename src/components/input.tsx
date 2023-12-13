import { InputContainer } from "../styles/components/input";

type Props = {
  placeholder?: string;
};

export function InputComponent({ placeholder = "" }: Props) {
  return <InputContainer placeholder={placeholder} />;
}
