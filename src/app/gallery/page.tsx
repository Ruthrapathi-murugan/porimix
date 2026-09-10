import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

const galleryPhotos = [
  "/picture1.jpeg",
  "/picture7.png",
  "/picture12.jpeg",
  "/picture13.jpeg",
  "/picture14.jpg",
  "/picture15.jpeg",
  "/picture16.jpeg",
  "/picture18.png",
];

export const metadata: Metadata = {
  title: "D Porimix Gallery | Fresh Snacks in Palani",
  description: "Explore the D Porimix gallery featuring our fresh, spicy, crunchy snacks from Palani.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <Header />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-3">Porimix gallery</p>
              <h1 className="brand-display text-5xl md:text-7xl text-brand-dark">All the<br />crunch.</h1>
            </div>
            <Link href="/" className="bg-brand-red text-white px-5 py-3 font-black uppercase text-sm hover:bg-brand-dark transition-colors">Back to home</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryPhotos.map((image, index) => (
              <figure key={image} className="overflow-hidden rounded-xl border-2 border-brand-dark/10 bg-white shadow-sm">
                <img src={image} alt={`Porimix snack gallery photo ${index + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300" />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
