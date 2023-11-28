import { styled } from ".."

export const MenuContainer = styled("div", {
    background: "linear-gradient(90deg, rgba(6,6,183,1) 0%, rgba(22,24,241,1) 100%)",
    width: "400px",
    height: "calc(100vh - 80px)",
    marginTop: "80px",
    padding: "60px 30px 30px 30px",
    borderRightWidth: "4px",
    borderBottomWidth: "0px",
    borderLeftWidth: "0px",
    borderTopWidth: "0px",
    borderColor: "$green300",
    borderStyle: "outset",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})

export const MenuItem = styled("a", {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "$gray300",
    padding: "10px",
    borderRadius: "10px",
    color: "$green300",
    fontWeight: 700,
    transition: "all 0.5s",
    fontStyle: "normal",
    cursor: "pointer",

    variants: {
        color: {
          selectColor: {
            backgroundColor: '$green200',
            color: '$gray300',
            '&:hover': {
                transform: "scale(1.08)",
                textDecoration: "underline",
              }
          },
        },
      },

    '&:hover': {
        transform: "scale(1.08)",
        textDecoration: "underline",
      }
})