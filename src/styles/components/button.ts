import { styled } from "..";


export const ButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  background: "$green300",
  padding: "20px",
  borderWidth: "5px",
  borderColor: "$green200",
  borderStyle: 'outset',
  borderRadius: "10px",
  color: "$gray200",

  '&:hover': {
    background: "$green400",
    borderStyle: 'inset',
  }
})