import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
    },

    body: {
        backgroundColor: '$gray200',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },

    'img': {
        objectFit: 'cover',
    },

    "a": {
        textDecoration: "none"
    },

    "a:hover": {
        filter: "brightness(0.8)"
    }
})