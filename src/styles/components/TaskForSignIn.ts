import Image from "next/image";
import { styled } from "..";


export const TaskContainer = styled("div", {
  width: "415px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
  background: "linear-gradient(90deg, rgba(191,241,206,1) 0%, rgba(130,189,167,1) 100%)",
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
    color: "$blue100"
})

export const Description = styled("p", {
    color: "$blue100",
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
    color: "$blue100"
})

export const Tag = styled("div", {
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
    fontSize: "10px"
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
    fontSize: "10px"
})

export const LikeIcon = styled("button", {})