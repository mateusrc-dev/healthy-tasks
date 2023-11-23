import { ButtonContainer } from "../styles/components/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Button({ children }: Props) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
