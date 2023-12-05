import Image from "next/image";
import { keyframes, styled } from "..";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  overflow: "auto"
})

export const BodyProfile = styled("div", {
    marginTop: "90px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "100px",
})

export const ContentContainerProfile = styled("div", {
    overflow: "auto",
    width: "100%",
    height: "calc(100vh - 90px)",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    paddingInline: "50px",
    paddingBottom: "100px",
    paddingTop: "40px",

    "input::placeholder": {
        color: "$gray200",
    },

    "textarea::placeholder": {
        color: "$gray200",
    },

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
    borderColor: "$green200"
})

export const ProfessionalTag = styled("button", {
    width: "100px",
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

    '&:hover': {
      background: "$green400",
    }
})

export const BestActivityContainerProfile = styled("button", {
    width: "600px",
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
    fontSize: "16px",
    cursor: "pointer",
    fontStyle: "italic",

    '&:hover': {
      filter: "brightness(0.6)"
    }
})

const showCheck = keyframes({
    '0%': { opacity: 0, scale: 0.8 },
    '50%': { opacity: 0.8, scale: 1.5 },
    '100%': { opacity: 1, scale: 1 },
});

export const CheckContainerProfile = styled("div", {
    position: "relative",
    width: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "$green300",
    borderRadius: "30px",
    padding: "10px",
    borderWidth: "2px",
    borderColor: "$green100",
    borderStyle: "outset",
    color: "$gray200",
    fontSize: "10px",
    fontWeight: 700,
    whiteSpace: "nowrap",

    "input[type=checkbox]:before": {
        content: "",
        display: "block",
        position: "absolute",
        width: "16px",
        height: "16px",
        top: "5px",
        left: "14px",
        borderWidth: "3px",
        borderColor: "$gray200",
        borderStyle: "outset",
        borderRadius: "10px",
        backgroundColor: "white",
    },
   "input[type=checkbox]:checked:after": {
        content: "",
        display: "block",
        width: "5px",
        height: "10px",
        border: "solid",
        borderColor: "$green100",
        borderStyle: "outset",
        borderWidth: "0 4px 4px 0",
        "-webkit-transform": "rotate(45deg)",
        "-ms-transform": "rotate(45deg)",
        transform: "rotate(45deg)",
        position: "absolute",
        top: "7px",
        left: "20px",
        animation: `${showCheck} 0.5s`
    },
})

export const ProfileTag = styled("button", {
    width: "100px",
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
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",

    '&:hover': {
      background: "$green400",
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
      filter: "brightness(0.8)"
    }
})

export const StrengthContainer = styled("div", {
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