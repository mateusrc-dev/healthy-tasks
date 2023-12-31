import Image from "next/image";
import { keyframes, styled } from "..";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  overflow: "auto",
})

export const BodyProfileDetails = styled("div", {
    marginTop: "90px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "30px",
})

export const ContentContainerProfileDetails = styled("div", {
    overflow: "auto",
    width: "100%",
    height: "calc(100vh - 90px)",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    paddingInline: "50px",
    paddingBottom: "100px",
    paddingTop: "40px",

    "&::-webkit-scrollbar": {
      width: 15,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "$green400",
      borderRadius: 10,
      width: 0,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "$green400",
      width: 0,
      borderRadius: 10,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
})

export const ImageUser = styled (Image, {
    borderRadius: "100%",
    borderWidth: "5px",
    borderStyle: "outset",
    borderColor: "$green200",
    "-webkit-box-shadow": "10px 10px 11px 0px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "10px 10px 11px 0px rgba(0,0,0,0.75)",
    boxShadow: "10px 10px 11px 0px rgba(0,0,0,0.75)",
})

export const TypeUserTag = styled("button", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "$green300",
    borderRadius: "30px",
    padding: "5px",
    borderWidth: "2px",
    borderColor: "$green100",
    borderStyle: "outset",
    color: "$gray200",
    fontSize: "10px",
    cursor: "pointer",

    "&:hover": {
      filter: "brightness(0.8)"
    }
})

export const StatisticContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "5px",
  borderRadius: "10px",
  padding: "20px",


  variants: {
      color: {
        positiveColor: {
          background: '$green500',
          color: '$gray200',
          borderWidth: "2px",
          borderColor: "$green600",
          borderStyle: "outset",
          '&:hover': {
              filter: "brightness(0.8)"
            }
        },
        negativeColor: {
          background: '$red100',
          color: '$gray200',
          borderWidth: "2px",
          borderColor: "$red200",
          borderStyle: "outset",
          '&:hover': {
              filter: "brightness(0.8)"
            }
        },
      },
    },
})

export const StatisticTag = styled("button", {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  background: "$green600",
  borderRadius: "30px",
  padding: "5px",
  borderWidth: "2px",
  borderColor: "$green500",
  borderStyle: "outset",
  color: "$gray200",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export const StrengthContainer = styled("button", {
  position: "absolute",
  top: "50px",
  right: "10px",
  width: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  background: "$green600",
  borderRadius: "30px",
  padding: "5px",
  borderWidth: "2px",
  borderColor: "$green500",
  borderStyle: "outset",
  color: "$gray200",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",

  '&:hover': {
    filter: "brightness(0.8)"
  }
})

const rotationMovement = keyframes({
  '0%': { transform: "rotate(-10deg)" },
  '50%': { transform: "rotate(0deg)"},
  '100%': { transform: "rotate(-10deg)"},
});

export const BestTask = styled("div", {
  color: "$green500",
  fontWeight: 700,
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  background: "#ff194b",
  position: "absolute",
  borderWidth: "3px",
  borderColor: "#e8175d",
  borderStyle: "outset",
  padding: "5px",
  borderRadius: "100%",
  animation: `${rotationMovement} 3s infinite`,
  top: "-40px",
  left: "-50px",
})