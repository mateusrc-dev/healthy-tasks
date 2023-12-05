import { styled } from ".."


export const Container = styled('button', {
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
      span: {
        visibility: 'visible',
      },
    },
})

export const TooltipContainer = styled('span', {
  position: 'absolute',
  bottom: '110%',
  left: '-60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 219,
  padding: "20px",
  background: '$blue200',
  borderRadius: '10px',
  visibility: 'hidden',

  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '$blue200 transparent transparent transparent',
  },
})