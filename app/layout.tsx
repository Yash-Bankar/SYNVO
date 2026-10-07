import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SYNVO — Co-building Software Companies with Creators",
  description:
    "We co-build software companies with creators. Synvo funds development and puts an operating team in place.",
  keywords: ["creator economy", "software co-building", "creator software", "Synvo"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EE6747",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full antialiased text-ink bg-chalk selection:bg-persimmon selection:text-chalk">
        {children}
      </body>
    </html>
  );
}
