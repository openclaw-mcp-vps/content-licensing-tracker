import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Licensing Tracker — Stop Using Unlicensed Media",
  description: "Scan your content library, track license expiration dates, and get free alternative suggestions. Built for content creators and marketing agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c84d6fbd-15b1-433c-a889-6a2119f0686c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
