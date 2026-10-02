import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iranzi.spriteteam.com"),
  title: "Response Iranzi | Software Engineering Student",
  description:
    "I am a software engineering student at Makerere University building practical tools for study, work, and everyday life.",
  applicationName: "Response Iranzi Portfolio",
  openGraph: {
    type: "website",
    url: "https://iranzi.spriteteam.com",
    title: "Response Iranzi | Software Engineering Student",
    description:
      "Makerere software engineering student and builder of Orch, a calmer home for student work.",
    images: [{ url: "/images/response.jpg", alt: "Response Iranzi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Response Iranzi | Software Engineering Student",
    description: "Practical software for student life and everyday work.",
    images: ["/images/response.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121011",
};

const themeScript = `try { const saved = localStorage.getItem("theme"); document.documentElement.dataset.theme = saved === "light" || saved === "dark" ? saved : "dark"; } catch { document.documentElement.dataset.theme = "dark"; }`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
