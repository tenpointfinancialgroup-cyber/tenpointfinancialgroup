import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Ten Point Financial Group | Building Generational Wealth",
  description: "Expert guidance in retirement planning, estate planning, life insurance, Medicare, and wealth protection for American families.",
  keywords: "retirement planning, estate planning, life insurance, Medicare, annuities, long term care, financial planning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
