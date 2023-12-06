import { styled } from ".."


export const Container = styled('button', {
    position: "absolute",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    borderRadius: "30px",
    padding: "5px",
    color: "$gray200",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",

    variants: {
      background: {
        withBackground: {
          top: "10px",
          right: "10px",
          background: "$green600",
          borderWidth: "2px",
          borderColor: "$green500",
          borderStyle: "outset",
        },
        withoutBackground: {
          top: "-20px",
          right: "-40px",
          background: "transparent",
          borderWidth: "0px",
        }
      },
    },

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