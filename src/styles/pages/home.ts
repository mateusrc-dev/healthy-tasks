import { keyframes } from "@stitches/react";
import { styled } from "..";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
})

export const Header = styled("header", {
  background: "radial-gradient(circle, rgba(130,189,167,1) 0%, rgba(243,255,210,1) 100%)",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 '-webkit-box-shadow': '5px 5px 15px 5px #f3ffd2, -9px 5px 15px 5px #bff1ce, -7px -5px 15px 5px #82bda7, 12px -5px 15px 5px #6e837c, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #ffff, -10px -7px 27px 1px #6e837c, 5px 5px 15px 5px rgba(0,0,0,0)', 
  boxShadow: '5px 5px 15px 5px #82bda7, -9px 5px 15px 5px #6e837c, -7px -5px 15px 5px #bff1ce, 12px -5px 15px 5px #f3ffd2, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #6e837c, -10px -7px 27px 1px #82bda7, 5px 5px 15px 5px rgba(0,0,0,0)',
  
  h1: {
    fontWeight: 700,
    padding: "20px",
    color: "$gray200"
  },
});

export const Footer = styled("footer", {
  background: "radial-gradient(circle, rgba(130,189,167,1) 0%, rgba(243,255,210,1) 100%)",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 '-webkit-box-shadow': '5px 5px 15px 5px #f3ffd2, -9px 5px 15px 5px #bff1ce, -7px -5px 15px 5px #82bda7, 12px -5px 15px 5px #6e837c, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #ffff, -10px -7px 27px 1px #6e837c, 5px 5px 15px 5px rgba(0,0,0,0)', 
  boxShadow: '5px 5px 15px 5px #82bda7, -9px 5px 15px 5px #6e837c, -7px -5px 15px 5px #bff1ce, 12px -5px 15px 5px #f3ffd2, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #6e837c, -10px -7px 27px 1px #82bda7, 5px 5px 15px 5px rgba(0,0,0,0)',
  p: {
    fontWeight: 400,
    padding: "20px",
    color: "$gray200"
  },
  position: "absolute",
  bottom: 0,
  zIndex: 2,
});

export const Body = styled("div", {
  padding: "0 20px",
  marginTop: "-40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
})

export const LoginContainer = styled("div", {
  background: "transparent",
  '-webkit-box-shadow': "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
  padding: '20px',
})

export const Button = styled("button", {
  background: "$green300",
  padding: "20px",
  borderWidth: "5px",
  borderColor: "$green200",
  borderStyle: 'outset',
  borderRadius: "10px",
  color: "$gray200",

  '&:hover': {
    background: "$green400",
    borderStyle: 'inset',
  }
})

export const Input = styled("input", {
  background: "$gray200",
  padding: '10px',
  border: 'none',
  borderRadius: '10px',
  '-webkit-box-shadow': "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
})

export const ImageContainer = styled("div", {
  position: 'relative'
})

export const TextContainer = styled('p', {
  width: "70px",
  position: 'absolute',
  fontSize: "10px",
  top: '25px',
  right: '45px',
  color: '$green400',
  fontWeight: 700,
})

export const MessageContainer = styled('p', {
  borderRadius: '10px',
  marginTop: '20px',
  '-webkit-box-shadow': "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#f3ffd2 0 -1px 4px, #bff1ce 0 -2px 10px, #82bda7 0 -10px 20px, #6e837c 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  padding: "20px",
  width: "500px",
  color: "$red100",
  fontWeight: 700,
  fontStyle: "italic",
})

export const LinkContainer = styled('a', {
  color: "$blue100",
  fontWeight: 700,
  fontStyle: "italic",
  cursor: "pointer",

  '&:hover': {
    textDecorationLine: "underline"
  }
})


const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)', clip: 'rect(35px, 600px, 300px, -300px)', scale: 1 },
  '50%': { transform: 'translateY(-285px)', clip: 'rect(295px, 600px, 600px, -300px)', scale: 0.9 },
  '100%': { transform: 'translateY(0px)', clip: 'rect(35px, 600px, 300px, -300px)', scale: 1 },
  
});

export const TaskAnimate = styled('div', {
  position: "absolute",
  zIndex: 0,
  top: "85px",
  left: "225px",
  animation: `${scaleUp} 20s infinite`
})