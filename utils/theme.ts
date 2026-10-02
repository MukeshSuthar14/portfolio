import { Theme } from "./types";

export const DEFAULT_THEME: Theme = "Dark";

// Browser UI colour (address bar / PWA title bar). Must match --bg in globals.css.
export const THEME_COLOR: Record<Theme, string> = {
    Dark: "#0A0B10",
    Light: "#F6F7FB",
};

export function parseTheme(value?: string): Theme {
    return value === "Light" || value === "Dark" ? value : DEFAULT_THEME;
}
