const colors = {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#7084F3",
    secondary: "#DE6FEC",
    tertiary: "#1DE9B6",
    default: "#808080",
    info: "#2196F3",
    warn: "#FFC107",
    error: "#FF5722",
};

const textSizes = {
    small: 12,
    medium: 16,
    large: 20,
};

const textStyles = {
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 18,
        fontStyle: "italic",
    },
    default: {
        fontSize: 16,
        fontWeight: "normal",
    },
    muted: {
        fontSize: 14,
        color: colors.default,
    },
    // Add more text styles as needed
};

const spacing = {
    small: 8,
    medium: 16,
    large: 24,
};

const shadows = {
    small: {
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    large: {
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
};

const card = {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.medium,
    borderColors: colors.black,
    borderWidth: 1,
    ...shadows.medium,
};

const borderColors = {
    default: "#000000",
};

const fonts = {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
    italic: "Roboto-Italic",
};

export default {
    colors,
    textSizes,
    textStyles,
    spacing,
    shadows,
    card,
    borderColors,
    fonts,
};
