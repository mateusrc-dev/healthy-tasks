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

  '&:hover': {
    filter: "brightness(0.9)"
  }
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
    '0%': { opacity: 1, scale: 1 },
    '100%': { opacity: 0, scale: 3 },
});


export const FavoriteIcon = styled("div", {
    animation: `${moreScale} 1s`
})

const showCheck = keyframes({
    '0%': { opacity: 0, scale: 0.8 },
    '50%': { opacity: 0.8, scale: 1.5 },
    '100%': { opacity: 1, scale: 1 },
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

export const TimeForFinishTask = styled("div", {})