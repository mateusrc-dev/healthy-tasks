import Image from "next/image";
import { styled } from "..";

export const CommentContainer = styled("div", {
  width: "375px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "20px",
  flexDirection: "row",
  background: "$green400",
  padding: "20px",
  borderRadius: "10px",

  '&:hover': {
    filter: "brightness(0.9)"
  }
})

export const CommentText = styled("p", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "20px",
  color: "$gray200",

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