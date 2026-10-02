import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Loader from "@/components/Loader";
import { SITE } from "@/utils/site";
import { parseTheme, THEME_COLOR } from "@/utils/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name }],
  generator: "Next.js",
  keywords: ["Mukesh Suthar", "Full Stack Developer", "NestJS", "Next.js", "Laravel", "SaaS", "portfolio"],
  creator: SITE.name,
  openGraph: {
    type: "website",
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.description,
    siteName: `${SITE.name} Portfolio`,
  },
};

async function readTheme() {
  const cookieStore = await cookies();
  return parseTheme(cookieStore.get("theme")?.value);
}

export async function generateViewport(): Promise<Viewport> {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: THEME_COLOR[await readTheme()],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await readTheme();

  return (
    <html
      lang="en"
      data-theme={theme}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Loader />
        <ClientLayout theme={theme}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
