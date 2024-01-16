import type { Metadata } from "next";
import type { Viewport } from "next";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  title: "Onewhim",
  description:
    "🎉 The hypermodern tech company building solutions for real-life issues.",
  icons: [
    { rel: "icon", url: "https://cdn.cloudwhim.com/onewhim-logo-round.svg" },
    {
      rel: "apple-touch-icon",
      url: "https://cdn.cloudwhim.com/onewhim-logo-mac.png",
    },
    {
      rel: "mask-icon",
      url: "https://cdn.cloudwhim.com/onewhim-logo-round.svg",
      color: "#000000",
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
