import type { Route, ProjectSettings, ColorScheme  } from "@Types/Types";

export const PROJECT_ROUTES: Route[] = [
    { path: "/", name: "Home" },
    { path: "#about", name: "About" },
    { path: "#projects", name: "Projects" },
    { path: "#contact", name: "Contact Us" },
    { path: "#faq", name: "FAQ" },
];

export const PROJECT_SETTINGS: ProjectSettings = {
    "BASE_URL": "https://www.growthsoft.co/",
    "PROJECT_NAME": "Growth",
    "IS_DEV_MODE": false, // ******************* DEVLOPMENT FEATURE | DO NOT COMMIT *************************************
};

export const COLORS: ColorScheme = {
    primary: "#111111", // Define the HEX Color | Primary
    secondary: "#1A1A1A", // Define the HEX Color | Secondary
    accent: "#FF4A00", // Define the HEX Color | Accent
    background: "#0D0D0D", // Define the HEX Color | BackGround
    text: "#FFFFFF", // Define the HEX Color | Text
};