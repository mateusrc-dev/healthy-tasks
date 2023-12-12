import Image from "next/image";
import { keyframes, styled } from "..";


export const TaskContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
  background: "linear-gradient(90deg, #1618f1 0%, #138fe8 100%)",
  padding: "20px",
  "-webkit-box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
  "-moz-box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
  "box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
  borderRadius: "10px",
  color: "$gray100",
})

export const Title = styled("h1", {
    color: "$gray200"
})

export const Description = styled("p", {
    color: "$gray300",
    fontStyle: "italic",
    marginTop: "5px",
})

export const Profile = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "25px",
})

export const Photo = styled(Image, {
    borderRadius: "100%",
    borderWidth: "5px",
    borderStyle: "double",
    borderColor: "$green400",
    "-webkit-box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
    "box-shadow": "10px 7px 14px 0px rgba(0,0,0,0.75)",
})

export const Name = styled("h2", {
    color: "$gray200"
})

export const Tag = styled("button", {
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

export const ButtonOfMotivation = styled("button", {
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "$blue200",
    borderRadius: "30px",
    padding: "5px",
    borderWidth: "2px",
    borderColor: "$blue100",
    borderStyle: "outset",
    color: "$gray200",
    fontSize: "10px",
    cursor: "pointer",

    '&:hover': {
        filter: "brightness(0.8)",
      }
})

const moreScale = keyframes({
    '0%': { scale: 1 },
    '50%': { scale: 3 },
    '65%': { scale: 1 },
    '85%': { scale: 1.5 },
    '100%': { scale: 1 },
});


export const FavoriteIcon = styled("div", {
    animation: `${moreScale} 0.5s`
})

const showText = keyframes({
    '0%': { transform: "translateX(-200px)", opacity: 0 },
    '100%': { transform: "translateX(0px)", opacity: 1 },
});

export const TextInformation = styled("p", {
    fontWeight: 700,
    fontStyle: "italic",
    fontSize: "10px",
    animation: `${showText} 1s`,
    position: "absolute",
    top: "15px",
})

const showCheck = keyframes({
    '0%': { opacity: 0, scale: 0.8 },
    '50%': { opacity: 0.8, scale: 1.5 },
    '100%': { opacity: 1, scale: 1 },
});

const changeColor = keyframes({
    '0%': { opacity: 0},
    '50%': { opacity: 0.8 },
    '100%': { opacity: 1 },
});

export const CheckContainer = styled("div", {
    position: "relative",
    width: "150px",
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

    variants: {
        color: {
          colorPositive: {
            background: "$green500",
            borderWidth: "2px",
            borderColor: "$green600",
            borderStyle: "outset",
            animation: `${changeColor} 1s`,
            color: "$gray100",
          },
          colorNegative: {
            background: "$red100",
            borderWidth: "2px",
            borderColor: "$red200",
            borderStyle: "outset",
            animation: `${changeColor} 1s`,
            width: "170px",
          },
        },
      },

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

const zoom = keyframes({
    '0%': { scale: 0, opacity: 0 },
    '100%': { scale: 1, opacity: 1 },
  });

export const CreateCommentContainer = styled("div", {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "$blue200",
    borderRadius: "10px",
    padding: "50px",
    gap: "30px",
    animation: `${zoom} 1s`,
})

export const TimeForFinishTaskContainerLeft = styled("div", {
    padding: "10px",
    background: "$gray200",
    borderRadius: "10px 0 0 10px",
    borderRightWidth: "1px",
    borderStyle: "outset",
    borderColor: "$blue100",
    fontWeight: 700,
    cursor: "pointer",

    '&:hover': {
        filter: "brightness(0.8)",
      }
})

export const TimeForFinishTaskContainerRight = styled("div", {
    padding: "10px",
    background: "$gray200",
    borderRadius: "0 10px 10px 0px",
    borderLeftWidth: "0px",
    borderStyle: "outset",
    borderColor: "$blue100",
    fontWeight: 700,
    cursor: "pointer",

    '&:hover': {
        filter: "brightness(0.8)",
      }
})