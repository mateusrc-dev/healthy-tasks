import { keyframes, styled } from "..";

const isRotating = keyframes({
  "to": {
    transform: "rotate(1turn)",
  }
})

export const LoadingContainer = styled("div", {
    ".Loading": {
      width: "20px",
      height: "20px",
      borderWidth: "2px",
      borderColor: "transparent",
      borderTopStyle: "solid",
      borderTopColor: "$red100",
      borderRadius: "100%",
      animation: `${isRotating} 1s infinite`,
    },
})