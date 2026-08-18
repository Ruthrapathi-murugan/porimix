"use client";

import { useCart } from "../context/CartContext";

export default function MobileBottomBar() {
  const { itemCount, toggleCart } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <a href="tel:+917010760433" className="flex flex-col items-center justify-center w-full text-brand-dark hover:text-brand-orange">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <span className="text-xs font-semibold">Call Now</span>
        </a>
        
        <div className="w-px h-10 bg-gray-200"></div>
        
        <button onClick={toggleCart} className="flex flex-col items-center justify-center w-full text-brand-orange hover:text-brand-red relative">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="text-xs font-semibold">Cart</span>
          {itemCount > 0 && (
            <span className="absolute top-0 right-8 bg-brand-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        
        <div className="w-px h-10 bg-gray-200"></div>
        
        <a href="https://maps.google.com/?q=Kumaran+Department+Store,Palani,Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full text-blue-500 hover:text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-xs font-semibold">Directions</span>
        </a>
      </div>
    </div>
  );
}
