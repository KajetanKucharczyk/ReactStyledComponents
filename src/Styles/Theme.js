//PREPARE OBJECTS FOR THEME

const deviceBreakpoint = 800;

//SIZEING OF ELEMENTS
const sizeStyles = {
    header: {
        height: 10
    },
    hashtagField: {
        height: 5
    },
    footer: {
        height: 5
    }
}

//STYLING FONTS
const fontStyles = {
    fonts: {
        normal: 'Roboto',
        light: 'Open Sans Condensed',
        title: 'Lobster',
    },
    colors: {
        black: "black",
        dark: "#444444",
        light: "#c7c7c7",
        white: "white"
    },
    size: {
        extraSmall: 1,
        small: 2,
        medium: 3,
        big: 4.5,
        extraBig: 6
    }
}

//COLORS USED
const colorStyles = {
    background: {
        black: "black",
        dark: "#444444",
        light: "#c7c7c7",
        white: "white"
    },
    colors: {
        black: "black",
        dark: "#444444",
        light: "#c7c7c7",
        white: "white"
    }
}

//MEDIA QUERIES
const mediaQueries = {
    mobile: `@media (max-width: ${deviceBreakpoint}px)`,
    desktop: `@media (min-width: ${deviceBreakpoint}px)`
}

export {sizeStyles, fontStyles, colorStyles, mediaQueries}