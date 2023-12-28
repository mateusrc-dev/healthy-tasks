import { keyframes } from "@stitches/react";
import { styled } from "..";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
})

export const Header = styled("header", {
  background: "radial-gradient(circle, #1618f1 0%, #138fe8 100%)",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '-webkit-box-shadow': '5px 5px 15px 5px #1618f1, -9px 5px 15px 5px #1112de, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #ffff, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)', 
  boxShadow: '5px 5px 15px 5px #1112de, -9px 5px 15px 5px #1618f1, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #0b0cca, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)',
  
  h1: {
    fontWeight: 700,
    padding: "20px",
    color: "$gray200"
  },
});

export const Footer = styled("footer", {
  background: "radial-gradient(circle, #1618f1 0%, #138fe8 100%)",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 '-webkit-box-shadow': '5px 5px 15px 5px #1618f1, -9px 5px 15px 5px #1112de, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #ffff, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)', 
  boxShadow: '5px 5px 15px 5px #1112de, -9px 5px 15px 5px #1618f1, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #0b0cca, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)',
  p: {
    fontWeight: 400,
    padding: "20px",
    color: "$gray200"
  },
  position: "absolute",
  bottom: 0,
  zIndex: 4,
});

export const Body = styled("div", {
  padding: "0 20px",
  height: "calc(100vh - 150px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
})

const translateXAnimation = keyframes({
  '0%': { transform: 'translateX(200px)', opacity: 0 },
  '100%': { transform: 'translateX(0px)', opacity: 1 },
});

export const WelcomeContainer = styled("div", {
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  animation: `${translateXAnimation} 1s ease-in-out`,
})

export const LoginContainer = styled("div", {
  background: "transparent",
  '-webkit-box-shadow': "#1618f1 0 -1px 4px, #1112de 0 -2px 10px, #0b0cca 0 -10px 20px, #0606b7 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#0606b7 0 -1px 4px, #0b0cca 0 -2px 10px, #1618f1 0 -10px 20px, #1112de 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  padding: '20px',
  animation: `${translateXAnimation} 1s ease-in-out`,
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
  '-webkit-box-shadow': "#1618f1 0 -1px 4px, #1112de 0 -2px 10px, #0b0cca 0 -10px 20px, #0606b7 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#0606b7 0 -1px 4px, #0b0cca 0 -2px 10px, #1618f1 0 -10px 20px, #1112de 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
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
  '-webkit-box-shadow': "#1618f1 0 -1px 4px, #1112de 0 -2px 10px, #0b0cca 0 -10px 20px, #0606b7 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)",
  boxShadow: "#0606b7 0 -1px 4px, #0b0cca 0 -2px 10px, #1618f1 0 -10px 20px, #1112de 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0)", 
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
  '0%': { transform: 'translateY(0px)', clip: 'rect(45px, 2000px, 800px, 390px)', scale: 0.55, left: "10px" },
  '50%': { transform: 'translateY(-210px)', clip: 'rect(220px, 1350px, 1000px, 350px)', scale: 0.55, left: "10px" },
  '100%': { transform: 'translateY(0px)', clip: 'rect(45px, 2000px, 800px, 390px)', scale: 0.55, left: "10px" },
});

export const TaskAnimate = styled('div', {
  position: "absolute",
  zIndex: 0,
  top: "100px",
  animation: `${scaleUp} 20s infinite`,
})