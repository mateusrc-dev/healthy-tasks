import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            green100: "#1618f1",
            green200: "#1112de",
            green300: "#0b0cca",
            green400: "#0606b7",
            green500: "#96ffa0",
            green600: "#78f784",

            gray100: "#2e0527",
            gray200:"#ffff",
            gray300: "#dfdfdf",

            red100: "#ff194b",
            red200: "#e8175d",

            blue100: "#3a89c9",
            blue200: "#138fe8",
        }
    }
})