import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LoaderProvider } from '../context/LoaderContext';

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
  themeColor: "#0a0a0f",
  colorScheme: "dark"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LoaderProvider>
        {children}
      </LoaderProvider>
    </html>
  );
}
