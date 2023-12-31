import Image from "next/image";
import { styled } from "..";

export const CommentContainer = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "20px",
  flexDirection: "row",
  background: "$green400",
  padding: "20px",
  borderRadius: "10px",

  "button": {
    "&:hover": {
      filter: "brightness(0.8)"
    }
  }
})

export const CommentText = styled("p", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  borderRadius: "20px",
  color: "$gray300",

  '&:hover': {
    filter: "brightness(0.9)"
  }
})

export const Profile = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
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

export const Tag = styled("div", {
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

export const LikeIcon = styled("button", {})