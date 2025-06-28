import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Suthar | Portfolio",
  description: "Mukesh Suthar's portfolio",
  applicationName: "My Portfolio",
  authors: [
    { name: "Mukesh Suthar" }
  ],
  generator: "Next.JS",
  keywords: ["mukesh's portfolio", "ms portfolio", "mukesh suthar's portfolio", "portfolio of mukesh", "portfolio of mukesh suthar"],
  creator: "Mukesh Suthar",
  publisher: "vercel",
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#b968c7' },
    { media: '(prefers-color-scheme: dark)', color: '#b968c7' },
  ],
  colorScheme: "dark"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
