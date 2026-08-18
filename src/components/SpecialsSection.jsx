"use client";
import { useCart } from "../context/CartContext";

export default function SpecialsSection({ images }) {
  const { addToCart } = useCart();

  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Customer Favourites 🔥</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Egg Masal Pori", price: 40, img: images.eggChaat },
            { name: "Cheese Masal Pori", price: 50, img: images.hero },
            { name: "Paneer Masal Pori", price: 50, img: images.eggChaat },
            { name: "Egg Murukku Settu", price: 40, img: images.murukku },
            { name: "Cheese Murukku Settu", price: 50, img: images.murukku },
            { name: "Paneer Norukkal", price: 50, img: images.norukkal },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-gray-50 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark font-bold px-4 py-1 rounded-full shadow-md">
                  ₹{item.price}
                </div>
              </div>
              <div className="p-6 text-center flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{item.name}</h3>
                <div className="mt-auto">
                  <button 
                    onClick={() => addToCart({ name: item.name, price: item.price, image: item.img })}
                    className="flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 px-8 rounded-full hover:bg-brand-red transition-colors w-full shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
