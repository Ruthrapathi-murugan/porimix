import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import MobileBottomBar from "../components/MobileBottomBar";
import MenuSection from "../components/MenuSection";
import SpecialsSection from "../components/SpecialsSection";

export default function Home() {
  const images = {
    hero: "/images/hero_pori_mix_1785477441477.png",
    eggChaat: "/images/new_masal_pori_1785477899789.png",
    murukku: "/images/new_murukku_settu_1785477910530.png",
    norukkal: "/images/new_tattu_murukku_1785477920539.png",
  };

  const whatsappLink = "https://wa.me/917010760433?text=Hi%20Porimix!%20I%20would%20like%20to%20place%20an%20order.%20Please%20share%20today's%20available%20menu.";

  return (
    <main className="relative bg-brand-light">
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/90 to-brand-orange/80 mix-blend-multiply z-10"></div>
          <img
            src={images.hero}
            alt="Delicious Masal Pori"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Palani's Crunchiest <br /> Pori Mix!
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white font-medium mb-10 drop-shadow-md">
            Fresh • Spicy • Crunchy • Made to Order
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-white mb-10 drop-shadow-md">
            Enjoy delicious Masal Pori, Murukku Settu, Norukkal and more at Porimix, Palani.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl">
              View Our Menu
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-white font-medium">
            <span className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">✨ Freshly Prepared</span>
            <span className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">💰 Pocket-Friendly</span>
            <span className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">🌶️ Lots of Varieties</span>
            <span className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">📍 Local Favourite</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-6">Crunchy Happiness in Every Bite</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Porimix brings Palani a delicious selection of freshly prepared Pori Mix, Masal Pori, Murukku Settu, Tattu Murukku and Norukkal varieties. From classic spicy flavours to Egg, Paneer and Cheese combinations, there's something for every snack lover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fresh Ingredients", icon: "🌱", desc: "We use only the freshest onions, coriander, and spices." },
              { title: "Made to Order", icon: "🍳", desc: "Every snack is mixed right in front of you." },
              { title: "Affordable Prices", icon: "₹", desc: "Delicious taste that's easy on the wallet." },
              { title: "Multiple Varieties", icon: "🌶️", desc: "From classic to cheese and paneer fusions." },
            ].map((feature, i) => (
              <div key={i} className="bg-brand-light p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MenuSection images={images} />

      <SpecialsSection images={images} />

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Food Gallery</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative">
              <img src={images.hero} alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xl font-bold text-brand-yellow">Masal Pori Varieties</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden group relative">
              <img src={images.murukku} alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-lg font-bold text-white">Murukku Settu</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden group relative">
              <img src={images.eggChaat} alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-lg font-bold text-brand-yellow">Egg Fusions</span>
              </div>
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden group relative">
              <img src={images.norukkal} alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-lg font-bold text-white">Norukkal Specials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Visit Our 3 Locations in Palani</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Main Branch", address: "Kumaran Department Store, 11, Red Cross Rd, Opposite Palani, Anna Nagar, Palani – 624601", mapQuery: "Kumaran+Department+Store,Palani,Tamil+Nadu" },
              { name: "Branch 2", address: "Please update your exact branch 2 address here, Palani, Tamil Nadu", mapQuery: "Palani,Tamil+Nadu" },
              { name: "Branch 3", address: "Please update your exact branch 3 address here, Palani, Tamil Nadu", mapQuery: "Palani,Tamil+Nadu" },
            ].map((loc, i) => (
              <div key={i} className="bg-brand-light p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-4 text-3xl">📍</div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">{loc.name}</h3>
                <p className="text-gray-700 flex-1 mb-6">{loc.address}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a href={`https://maps.google.com/?q=${loc.mapQuery}`} target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors shadow-sm text-center flex-1">
                    Get Directions
                  </a>
                  <a href="tel:+917010760433" className="bg-white border-2 border-brand-orange text-brand-orange px-4 py-2 rounded-full font-bold text-sm hover:bg-brand-orange hover:text-white transition-colors shadow-sm text-center flex-1">
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0232230491866!2d77.5140813!3d10.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzAwLjAiTiA3N8KwMzAnNTAuNyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Porimix Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </main>
  );
}
