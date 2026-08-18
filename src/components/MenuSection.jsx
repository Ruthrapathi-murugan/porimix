"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function MenuSection({ images }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const carouselRef = useRef();
  const { addToCart } = useCart();

  const getIngredients = (name, categoryBase) => {
    let ingredients = [...categoryBase];
    
    if (name.includes("Egg")) ingredients.push("Fresh Boiled Egg");
    if (name.includes("Tomato")) ingredients.push("Chopped Tomatoes");
    if (name.includes("Garlic")) ingredients.push("Roasted Garlic");
    if (name.includes("Mango")) ingredients.push("Raw Mango Pieces");
    if (name.includes("Cucumber")) ingredients.push("Fresh Cucumber");
    if (name.includes("Curd")) ingredients.push("Thick Fresh Curd");
    if (name.includes("Groundnut")) ingredients.push("Roasted Groundnuts");
    if (name.includes("Bundi")) ingredients.push("Crispy Kara Bundi");
    if (name.includes("Paneer")) ingredients.push("Soft Paneer Cubes");
    if (name.includes("Cheese")) ingredients.push("Grated Processed Cheese");
    
    return ingredients;
  };

  const categories = [
    {
      title: "MASAL PORI (KARAM)",
      image: images.eggChaat,
      baseIngredients: ["Puffed Rice (Pori)", "Red Onion", "Secret Masala", "Coriander Leaves", "Roasted Peanuts", "Lemon Drops"],
      items: [
        { name: "Masal Pori", price: 20 },
        { name: "Egg Masal Pori", price: 40 },
        { name: "Tomato Masal Pori", price: 30 },
        { name: "Garlic Masal Pori", price: 30 },
        { name: "Mango Masal Pori", price: 30 },
        { name: "Bundi Masal Pori", price: 30 },
        { name: "Paneer Masal Pori", price: 50 },
        { name: "Cheese Masal Pori", price: 50 },
      ]
    },
    {
      title: "TATTU MURUKKU SETTU",
      image: images.norukkal,
      baseIngredients: ["Tattu Murukku (Flat Puri)", "Shredded Carrot", "Shredded Beetroot", "Special Spices", "Green Chutney", "Onion Rings"],
      items: [
        { name: "Tattu Murukku Settu", price: 30 },
        { name: "Egg Tattu Murukku Settu", price: 40 },
        { name: "Tomato Tattu Murukku Settu", price: 35 },
        { name: "Garlic Tattu Murukku Settu", price: 35 },
        { name: "Mango Tattu Murukku Settu", price: 35 },
        { name: "Cucumber Tattu Murukku Settu", price: 35 },
        { name: "Curd Tattu Murukku Settu", price: 35 },
        { name: "Groundnut Tattu Murukku Settu", price: 35 },
        { name: "Bundi Tattu Murukku Settu", price: 35 },
        { name: "Paneer Tattu Murukku Settu", price: 50 },
        { name: "Cheese Tattu Murukku Settu", price: 50 },
      ]
    },
    {
      title: "MURUKKU SETTU VARIETIES",
      image: images.murukku,
      baseIngredients: ["Crispy Spiral Murukku", "Shredded Carrot", "Shredded Beetroot", "Red Masala Powder", "Curry Leaves", "Onion"],
      items: [
        { name: "Murukku Settu", price: 30 },
        { name: "Egg Murukku Settu", price: 40 },
        { name: "Tomato Murukku Settu", price: 35 },
        { name: "Garlic Murukku Settu", price: 35 },
        { name: "Mango Murukku Settu", price: 35 },
        { name: "Cucumber Murukku Settu", price: 35 },
        { name: "Curd Murukku Settu", price: 35 },
        { name: "Groundnut Murukku Settu", price: 35 },
        { name: "Bundi Murukku Settu", price: 35 },
        { name: "Paneer Murukku Settu", price: 50 },
        { name: "Cheese Murukku Settu", price: 50 },
      ]
    },
    {
      title: "NORUKKAL VARIETIES",
      image: images.hero,
      baseIngredients: ["Crushed Savory Snacks (Papdi)", "Tangy Red Chutney", "Chopped Onion", "Fresh Coriander", "Special Chaat Masala"],
      items: [
        { name: "Plain Norukkal", price: 30 },
        { name: "Egg Norukkal", price: 40 },
        { name: "Tomato Norukkal", price: 35 },
        { name: "Garlic Norukkal", price: 35 },
        { name: "Mango Norukkal", price: 35 },
        { name: "Cucumber Norukkal", price: 35 },
        { name: "Curd Norukkal", price: 35 },
        { name: "Groundnut Norukkal", price: 35 },
        { name: "Bundi Norukkal", price: 35 },
        { name: "Paneer Norukkal", price: 50 },
        { name: "Cheese Norukkal", price: 50 },
      ]
    }
  ];

  return (
    <>
      <section id="menu" className="py-20 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 font-medium bg-brand-yellow/20 inline-block px-4 py-2 rounded-full animate-pulse">
              👉 Swipe/Drag cards to explore & Click to view ingredients!
            </p>
          </div>
          
          <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
            <motion.div 
              drag="x" 
              dragConstraints={carouselRef}
              className="flex gap-8 pb-8"
              style={{ paddingRight: "100px" }}
            >
              {categories.map((category, catIdx) => (
                <motion.div 
                  key={catIdx} 
                  className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex-shrink-0 flex flex-col h-[500px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                    <img src={category.image} alt={category.title} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                    <h3 className="text-xl font-bold text-brand-red flex-1 leading-tight">{category.title}</h3>
                  </div>
                  
                  <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="flex items-center justify-between group py-3 px-4 border border-transparent hover:border-brand-yellow/50 bg-gray-50 hover:bg-white rounded-2xl cursor-pointer transition-all shadow-sm hover:shadow-md"
                        onClick={() => setSelectedItem({
                          ...item,
                          image: category.image,
                          ingredients: getIngredients(item.name, category.baseIngredients)
                        })}
                      >
                        <span className="text-[17px] font-medium text-brand-dark group-hover:text-brand-orange transition-colors">{item.name}</span>
                        <span className="text-[17px] font-bold text-brand-red">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" 
          onClick={() => setSelectedItem(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 w-full">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <button 
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-md transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <h3 className="text-3xl font-extrabold text-white leading-tight drop-shadow-lg">{selectedItem.name}</h3>
                <span className="text-2xl font-bold text-brand-dark bg-brand-yellow px-4 py-1 rounded-2xl shadow-lg">₹{selectedItem.price}</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <span className="text-2xl">🥣</span> Ingredients
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedItem.ingredients.map((ing, i) => (
                    <span key={i} className="bg-brand-light border border-brand-orange/30 text-brand-dark px-4 py-2 rounded-xl text-sm font-semibold shadow-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> {ing}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  addToCart(selectedItem);
                  setSelectedItem(null);
                }}
                className="w-full text-center bg-brand-orange text-white hover:bg-brand-red px-6 py-4 rounded-2xl font-bold text-xl transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
