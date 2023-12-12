import { styled } from "..";

export const ContainerAllTasks = styled("main", {
  width: "100%",
  height: "100vh",
  overflow: "auto"
})

export const BodyAllTasks = styled("div", {
    marginTop: "90px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
})

export const HeaderAllTasks = styled("header", {
    background: "radial-gradient(circle, #1618f1 0%, #138fe8 100%)",
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '-webkit-box-shadow': '5px 5px 15px 5px #1618f1, -9px 5px 15px 5px #1112de, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #ffff, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)', 
    boxShadow: '5px 5px 15px 5px #1112de, -9px 5px 15px 5px #1618f1, -7px -5px 15px 5px #0b0cca, 12px -5px 15px 5px #0606b7, 12px 10px 15px 7px #2e0527, -10px 10px 15px 7px #0b0cca, -10px -7px 27px 1px #3a89c9, 5px 5px 15px 5px rgba(0,0,0,0)',
    position: "absolute",

    h1: {
      fontWeight: 700,
      padding: "20px",
      color: "$gray200"
    },
  });

export const ContentContainerAllTasks = styled("div", {
    width: "100%",
    height: "calc(100vh - 90px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    padding: "40px",
    paddingBottom: "120px",

    "&::-webkit-scrollbar": {
      width: 15,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "$green400",
      borderRadius: 10,
      width: 0,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "$green400",
      width: 0,
      borderRadius: 10,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
})

export const ContainerForSpecificTasks = styled("div", {
    position: "relative",
    width: "100%",
    minHeight: "calc(100vh - 250px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    borderWidth: "4px",
    borderStyle: "outset",
    borderColor: "$green300",
    borderRadius: "20px",

    "&::-webkit-scrollbar": {
      width: 15,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "$green400",
      borderRadius: 10,
      width: 0,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "$green400",
      width: 0,
      borderRadius: 10,
      backgroundClip: "padding-box",
      border: "3px solid transparent",
    },
})
