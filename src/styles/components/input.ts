import { styled } from "..";

export const InputContainer = styled("input", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  background: "$gray200",
  padding: "10px",
  borderWidth: "5px",
  borderColor: "$gray300",
  borderStyle: 'outset',
  borderRadius: "10px",
  color: "$gray100",

  '&:hover': {
    filter: "brightness(0.8)",
    borderStyle: 'inset',
  }
})