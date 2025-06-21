import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Suthar | Portfolio",
  description: "Mukesh Suthar's portfolio",
  icons: "https://mukesh-suthar.vercel.app/mukesh-image.jpg"
};

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
