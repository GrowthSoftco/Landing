import type { Route, ProjectSettings, ColorScheme  } from "@Types/Types";

export const PROJECT_ROUTES: Route[] = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact Us" },
    { path: "/faq", name: "FAQ" },
];

export const PROJECT_SETTINGS: ProjectSettings = {
    "PROJECT_NAME": "Growth",
    "IS_DEV_MODE": true, // ******************* DEVLOPMENT FEATURE | DO NOT COMMIT *************************************
};

export const COLORS: ColorScheme = {
    primary: "#0000", // Define the HEX Color | Primary
    secondary: "#0000", // Define the HEX Color | Secondary
    accent: "#0000", // Define the HEX Color | Accent
    background: "#0000", // Define the HEX Color | BackGround
    text: "#0000", // Define the HEX Color | Text
};