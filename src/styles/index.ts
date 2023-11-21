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
            green100: "#f3ffd2",
            green200: "#bff1ce",
            green300: "#82bda7",
            green400: "#6e837c",

            gray100: "#2e0527",
            gray200:"#ffff",
        }
    }
})