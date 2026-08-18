import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import CartSidebar from "../components/CartSidebar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porimix Palani | Masal Pori, Murukku Settu & Snacks",
  description: "Visit Porimix in Palani for fresh Masal Pori, Murukku Settu, Tattu Murukku, Norukkal, Egg, Paneer and Cheese snack varieties. Call or WhatsApp 07010760433.",
  keywords: "Porimix Palani, Pori Mix Palani, Masal Pori Palani, Murukku Settu Palani, Tattu Murukku Palani, Norukkal Palani, Street Food Palani, Snacks in Palani, Best snacks in Palani, Chaat shop Palani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
