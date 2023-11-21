import { styled } from "..";

export const Header = styled("header", {
  background: "radial-gradient(circle, rgba(130,189,167,1) 0%, rgba(243,255,210,1) 100%)",
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '26% 24% 49% 51% / 0% 0% 100% 100%',
 '-webkit-box-shadow': '5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)', 
  boxShadow: '5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)',

  h1: {
    fontWeight: 700,
    padding: "20px",
    color: "$gray200"
  },
});