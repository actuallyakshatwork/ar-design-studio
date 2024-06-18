import type { Metadata } from "next";
import { Instrument_Serif, Inter, Playfair_Display } from "next/font/google";

//playfair and intrumental serif
import "./globals.css";
import Navbar from "./_components/Navbar";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AR Design Studio",
  description: "Demo Preview of the portfolio for AR Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${playfairDisplay.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
