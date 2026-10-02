import type { MetadataRoute } from "next";
import { SITE } from "@/utils/site";
import { THEME_COLOR } from "@/utils/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} | Portfolio`,
    short_name: "Mukesh",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    theme_color: THEME_COLOR.Dark,
    background_color: THEME_COLOR.Dark,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
