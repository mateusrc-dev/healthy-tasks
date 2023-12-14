import { keyframes, styled } from "..";

const zoom = keyframes({
  '0%': { scale: 0, opacity: 0 },
  '100%': { scale: 1, opacity: 1 },
});

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
  animation: `${zoom} 1s`,

  variants: {
    position: {
      absolute: {
        position: "absolute",
        padding: "5px",
        top: "157px",
      },
    },
  },

  "&:disabled, &[disabled]": {
    filter: "brightness(0.8)"
  },

  '&:hover:not([disabled])': {
    background: "$green400",
    borderStyle: 'inset',
  }
})