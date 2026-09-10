import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import CartSidebar from "../components/CartSidebar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dporimix.com"),
  title: "D Porimix | Fresh Masal Pori & Snacks",
  description: "Visit D Porimix in Palani for fresh Masal Pori, Murukku Settu, Tattu Murukku, Norukkal and delicious snack varieties.",
  keywords: "D Porimix, D Porimix Palani, Masal Pori Palani, Murukku Settu Palani, Tattu Murukku Palani, Norukkal Palani, street food Palani",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "D Porimix | Fresh Masal Pori & Snacks",
    description: "Fresh, spicy and crunchy snacks from D Porimix in Palani.",
    url: "https://dporimix.com/",
    siteName: "D Porimix",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/logo.jpeg", width: 1600, height: 516, alt: "D Porimix logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D Porimix | Fresh Masal Pori & Snacks",
    description: "Fresh, spicy and crunchy snacks from D Porimix in Palani.",
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-brand-light text-brand-dark">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M1DX7EJG97" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-M1DX7EJG97');`}
        </Script>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
