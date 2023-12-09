import { ButtonContainer } from "../styles/components/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  position?: boolean;
  clickEvent?: () => void;
};

export function Button({ children, position = false, clickEvent }: Props) {
  return (
    <ButtonContainer
      onClick={clickEvent}
      position={position ? "absolute" : null}
    >
      {children}
    </ButtonContainer>
  );
}
