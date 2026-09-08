export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 pt-16 mt-20 relative overflow-hidden" id="contact">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col space-y-4">
          <a href="#home" className="flex items-center">
            <img src="/images/logo.jpeg" alt="Porimix Logo" className="h-16 md:h-20 w-auto object-contain" />
          </a>
          <p className="text-gray-400 max-w-sm">
            Palani&apos;s home for fresh, spicy and crunchy street snacks made to order.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-brand-yellow">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#location" className="text-gray-400 hover:text-white transition-colors">Visit Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-brand-yellow">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-3 mt-1 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Kumaran Department Store, 11, Red Cross Rd, Opposite Palani, Anna Nagar, Palani – 624601</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <a href="tel:+917010760433" className="hover:text-white transition-colors">07010760433</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 pb-16 md:pb-0">
        <p>&copy; {new Date().getFullYear()} Porimix. All rights reserved.</p>
        <p className="mt-2 text-sm">Created by <a href="https://ruthradigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-yellow hover:text-white transition-colors">Ruthra Digital Solutions</a></p>
      </div>
    </footer>
  );
}
