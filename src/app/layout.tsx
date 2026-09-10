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
  title: "Porimix Palani | Fresh Masal Pori",
  description: "Porimix brings Palani a delicious selection of freshly prepared snacks, mixed with bold masala and plenty of crunch.",
  keywords: "D Porimix, D Porimix Palani, Porimix Palani, Masal Pori Palani, Murukku Settu Palani, Tattu Murukku Palani, Norukkal Palani",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Porimix Palani | Fresh Masal Pori",
    description: "Porimix brings Palani a delicious selection of freshly prepared snacks, mixed with bold masala and plenty of crunch.",
    url: "https://dporimix.com/",
    siteName: "D Porimix",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/logo.jpeg", width: 1600, height: 516, alt: "D Porimix logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porimix Palani | Fresh Masal Pori",
    description: "Porimix brings Palani a delicious selection of freshly prepared snacks, mixed with bold masala and plenty of crunch.",
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
