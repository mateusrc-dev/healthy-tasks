import { keyframes, styled } from "..";

const zoom = keyframes({
  '0%': { scale: 0, opacity: 0 },
  '100%': { scale: 1, opacity: 1 },
});

export const FavoriteTaskContainer = styled("div", {
  position: "relative",
  width: "450px",
  height: "260px",
  background: "$green300",
  padding: "20px",
  borderWidth: "5px",
  borderColor: "$green200",
  borderStyle: 'outset',
  borderRadius: "50px",
  color: "$gray200",
  animation: `${zoom} 1s`,
  cursor: "pointer",

  '&:hover': {
    background: "$green400",
    borderStyle: 'inset',
    button: {
      scale: 1,
      opacity: 1,
    }
  }
})

export const ButtonWithHover = styled("button", {
  position: "absolute",
  top: -25,
  right: -25,
  zIndex: 1,
  background: "transparent",
  border: "none",
  scale: 0,
  opacity: 0,
  transition: "all 0.5s ease-in-out",
  cursor: "pointer",
})