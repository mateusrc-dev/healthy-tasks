import { ButtonContainer } from "../styles/components/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  selected?: boolean;
  position?: boolean;
  clickEvent?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  position = false,
  clickEvent,
  disabled = true,
  selected = false,
}: Props) {
  return (
    <ButtonContainer
      onClick={clickEvent}
      position={position ? "absolute" : null}
      disabled={!disabled}
      background={selected ? "isSelected" : null}
      style={{ cursor: !disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </ButtonContainer>
  );
}
