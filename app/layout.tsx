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
  title: "Response Iranzi | Software Engineering Student in Kampala",
  description:
    "Response Iranzi is a software engineering student at Makerere University in Kampala, Uganda, building practical software for student life and everyday work.",
  applicationName: "Response Iranzi Portfolio",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "5SrRczB8byldqqc8QIOzYydEYGQmumQYX14DMlpbb_M",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Response Iranzi",
    "software engineering student",
    "Makerere University",
    "Kampala software developer",
    "Orch student productivity app",
    "student software projects",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Response Iranzi | Software Engineering Student in Kampala",
    description: "Software engineering student at Makerere University building Orch and practical software for student life.",
    images: [{
      url: "/images/response-portrait.webp",
      alt: "Response Iranzi in a dark suit beside a bright window",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Response Iranzi | Software Engineering Student in Kampala",
    description: "Makerere University software engineering student building practical software for student life.",
    images: ["/images/response-portrait.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11120f",
};

const themeScript = `try { const saved = localStorage.getItem("theme"); document.documentElement.dataset.theme = saved === "light" || saved === "dark" ? saved : "dark"; } catch { document.documentElement.dataset.theme = "dark"; }`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://iranzi.spriteteam.com/#website",
      url: "https://iranzi.spriteteam.com/",
      name: "Response Iranzi",
      description:
        "Portfolio of Response Iranzi, a software engineering student at Makerere University in Kampala, Uganda.",
      inLanguage: "en",
      publisher: { "@id": "https://iranzi.spriteteam.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://iranzi.spriteteam.com/#person",
      name: "Response Iranzi",
      url: "https://iranzi.spriteteam.com/",
      image: "https://iranzi.spriteteam.com/images/response-portrait.webp",
      jobTitle: "Software engineering student",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
      sameAs: [
        "https://github.com/iranziresponse",
        "https://www.linkedin.com/in/iranzi-response-428136382",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
