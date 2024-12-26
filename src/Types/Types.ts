export type AllowedPaths = "/" | "#about" | "#projects" | "#contact" | "#faq";

export type Route = {
    path: AllowedPaths;
    name: string;
};


export type ProjectSettings = {
    BASE_URL: string,
    PROJECT_NAME: string;
    IS_DEV_MODE: boolean;
};


export type HexColor = `#${string}`;

export type ColorScheme = {
    [ key: string ]: HexColor;
}