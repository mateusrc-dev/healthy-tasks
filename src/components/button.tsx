import { ButtonContainer } from "../styles/components/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  position?: boolean;
  clickEvent?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  position = false,
  clickEvent,
  disabled = true,
}: Props) {
  return (
    <ButtonContainer
      onClick={clickEvent}
      position={position ? "absolute" : null}
      disabled={!disabled}
      style={{ cursor: !disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </ButtonContainer>
  );
}
