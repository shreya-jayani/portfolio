import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Shreya Jayani - Data Analyst & BI Specialist",
  description: "Portfolio of Shreya Jayani, specializing in Data Analysis, Business Intelligence, and Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased bg-smoky-black text-light-gray">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
