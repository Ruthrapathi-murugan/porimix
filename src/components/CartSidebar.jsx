"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [orderType, setOrderType] = useState("Takeaway");
  const [branch, setBranch] = useState("Main Branch");

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = `Hi Porimix! I would like to place an order:%0A`;
    message += `*Branch:* ${branch}%0A`;
    message += `*Type:* ${orderType}%0A%0A`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.quantity}x ${item.name} (₹${item.price * item.quantity})%0A`;
    });
    message += `%0A*Total Amount: ₹${cartTotal}*%0A%0APlease confirm!`;

    window.open(`https://wa.me/917010760433?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[150] backdrop-blur-sm"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[200] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-light">
              <h2 className="text-2xl font-extrabold text-brand-dark flex items-center gap-2">
                🛒 Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white rounded-full transition-colors text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <span className="text-6xl mb-4">🛍️</span>
                  <p className="text-xl font-medium">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-6 py-2 bg-brand-yellow text-brand-dark rounded-full font-bold hover:bg-yellow-500 transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={`${item.name}-${index}`} 
                    className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 items-center relative group"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-dark leading-tight">{item.name}</h4>
                      <div className="text-brand-red font-bold mt-1">₹{item.price * item.quantity}</div>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.name)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
                <div className="space-y-4 mb-6">
                  {/* Branch Selection */}
                  <div>
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 block">Select Branch</label>
                    <select 
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-brand-dark rounded-xl px-4 py-3 outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-medium"
                    >
                      <option value="Main Branch">Main Branch</option>
                      <option value="Branch 2">Branch 2</option>
                      <option value="Branch 3">Branch 3</option>
                    </select>
                  </div>
                  
                  {/* Order Type Selection */}
                  <div>
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 block">Order Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setOrderType("Takeaway")}
                        className={`py-2 px-4 rounded-xl font-bold text-sm transition-all border-2 ${orderType === "Takeaway" ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"}`}
                      >
                        🛍️ Takeaway
                      </button>
                      <button 
                        onClick={() => setOrderType("Dine-in")}
                        className={`py-2 px-4 rounded-xl font-bold text-sm transition-all border-2 ${orderType === "Dine-in" ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"}`}
                      >
                        🍽️ Dine-in
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                  <span className="text-xl font-medium text-gray-500">Total Amount</span>
                  <span className="text-3xl font-extrabold text-brand-dark">₹{cartTotal}</span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
