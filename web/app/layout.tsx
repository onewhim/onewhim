import type { Metadata } from "next";
import type { Viewport } from "next";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  title: "Onewhim",
  description:
    "🔥 The hypermodern tech company focusing on real issues in life.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
