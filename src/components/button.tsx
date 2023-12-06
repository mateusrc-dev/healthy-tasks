import { ButtonContainer } from "../styles/components/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  position?: boolean;
};

export function Button({ children, position = false }: Props) {
  return (
    <ButtonContainer position={position ? "absolute" : null}>
      {children}
    </ButtonContainer>
  );
}
