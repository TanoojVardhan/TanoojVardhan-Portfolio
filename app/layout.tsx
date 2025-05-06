import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Tanooj Portfolio",
    template: "%s | Tanooj Portfolio",
  },
  description: "Personal portfolio of Tanooj Vardhan - AI & ML graduate seeking opportunities in operations and technology",
  openGraph: {
    title: "Tanooj Portfolio",
    description:
      "Personal portfolio of Tanooj Vardhan - AI & ML graduate seeking opportunities in operations and technology",
    url: "https://tanoojvardhan.com",
    siteName: "Tanooj Portfolio",
    images: [
      {
        url: "https://chronark.com/og.png", // You may want to update this image path later
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tanooj Vardhan",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/tanooj-logo.svg", // Using the SVG as shortcut icon
    icon: [
      { url: "/tanooj-logo.svg", type: "image/svg+xml" },
      { url: "/Tanooj Logo.png", type: "image/png" }
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <link rel="icon" href="/tanooj-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/Tanooj Logo.png" type="image/png" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
