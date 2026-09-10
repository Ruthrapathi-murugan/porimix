import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FormsparkForm from "../components/FormsparkForm";
import Link from "next/link";

export default function Home() {
  const images = {
    hero: "/images/hero_pori_mix_1785477441477.png",
    heroCover: "/cover.jpeg",
    heroImage: "/picture18.png",
    eggChaat: "/images/new_masal_pori_1785477899789.png",
    murukku: "/images/new_murukku_settu_1785477910530.png",
    norukkal: "/images/new_tattu_murukku_1785477920539.png",
  };
  const whatsappLink = "https://wa.me/917010760433?text=Hi%20Porimix!%20I%20would%20like%20to%20place%20an%20order.";

  return (
    <main className="relative overflow-hidden bg-brand-light">
      <Header />
      <section id="home" className="relative bg-brand-yellow pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-brand-yellow/65 z-10" /><img src={images.heroCover} alt="D Porimix snacks" className="w-full h-full object-cover opacity-60 mix-blend-screen" /></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div><p className="inline-flex bg-brand-yellow text-brand-dark px-4 py-2 font-black uppercase tracking-[.2em] text-xs brand-sticker">Palani&apos;s favourite snack stop</p><h1 className="mt-7 mb-7"><img src="/images/logo.jpeg" alt="Porimix" className="w-full max-w-[620px] bg-brand-yellow" /></h1><p className="max-w-xl text-xl md:text-2xl text-red-600 font-bold leading-tight mb-9">Fresh, spicy, crunchy and mixed just the way you like it.</p><div className="flex flex-wrap gap-4"><a href="#menu" className="bg-brand-yellow text-brand-dark hover:bg-white px-7 py-4 font-black uppercase tracking-wide transition-transform hover:-translate-y-1 brand-sticker">Explore menu</a><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-brand-red px-7 py-4 font-black uppercase tracking-wide transition-colors">Order now</a></div></div>
          <div className="relative hidden lg:block"><div className="absolute -top-12 -right-3 bg-brand-yellow text-brand-dark w-32 h-32 rounded-full flex items-center justify-center text-center font-black uppercase leading-none rotate-12 brand-sticker">Fresh<br />&amp;<br />crunchy</div><img src={images.heroImage} alt="D Porimix signature snack" className="w-full aspect-square object-cover border-[10px] border-white shadow-[14px_14px_0_#181818] rotate-3" /></div>
        </div>
      </section>

      <section id="about" className="py-20 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
            <div><p className="text-white font-black uppercase tracking-[.25em] text-sm mb-4">About Porimix</p><h2 className="brand-display text-5xl md:text-7xl text-white">Our<br />History</h2></div>
            <div className="text-lg md:text-xl leading-relaxed max-w-3xl space-y-5"><p className="font-bold">D PORIMIX was born from a vision in 2011 — a vision to create quality food products with great taste, consistency, and trust.</p><p>Over the years, this vision continued to grow through experience, ideas, and dedication. On 7th November 2024, the vision was officially brought to life, marking the beginning of the D PORIMIX journey.</p><p>Since then, we have been committed to delivering quality products while continuously improving and innovating to meet the expectations of our customers.</p><p>Today, D PORIMIX moves forward with a clear vision to grow into a trusted and recognized food brand, while staying true to the values on which the journey began.</p></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-14">{[["2011", "The Vision"], ["7th November 2024", "The Beginning"], ["The Future", "Our Journey Continues"]].map(([number, label]) => <div key={label} className="border-t-4 border-white pt-4"><strong className="brand-display text-3xl md:text-4xl block">{number}</strong><span className="font-bold">{label}</span></div>)}</div>
          <div className="mt-16 grid md:grid-cols-[.75fr_1.25fr] gap-8 items-center bg-white p-5 sm:p-8 brand-sticker text-brand-dark"><div className="aspect-square max-w-sm w-full mx-auto overflow-hidden border-4 border-brand-dark bg-brand-light"><img src="/images/founder-vigneshwaran.jpg" alt="Vigneshwaran B, Founder and CEO of Porimix" className="w-full h-full object-cover" /></div><div><p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-3">Meet the founder</p><h3 className="brand-display text-4xl md:text-6xl text-brand-dark mb-4">Vigneshwaran B</h3><p className="text-brand-red font-black uppercase tracking-wide mb-5">Founder &amp; CEO</p><p className="text-lg md:text-xl leading-relaxed text-gray-700">With a passion for bold local flavours and a vision to make every snack memorable, Vigneshwaran B leads Porimix with freshness, creativity and a deep love for Palani&apos;s food culture.</p></div></div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-10"><p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-3">Our products</p><h2 className="brand-display text-5xl md:text-7xl text-brand-dark">Traditional taste.<br />Made fresh.</h2></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{[{ name: "Pori Mix", image: "/picture1.jpeg" }, { name: "Masala Pori", image: "/picture15.jpeg" }, { name: "Mixture", image: "/picture7.png" }, { name: "Omapodi", image: "/picture13.jpeg" }, { name: "Masala Peanuts", image: "/picture14.jpg" }, { name: "Banana Chips", image: "/picture12.jpeg" }].map((product) => <article key={product.name} className="group overflow-hidden rounded-xl border border-brand-dark/10 bg-brand-light shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all"><div className="aspect-square overflow-hidden"><img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110" /></div><div className="p-3 text-center"><h3 className="font-black text-sm sm:text-base">{product.name}</h3><a href="#contact" className="mt-3 inline-block bg-brand-dark text-white px-3 py-2 text-[10px] font-black uppercase hover:bg-brand-red">Enquire</a></div></article>)}</div></div></section>

      <section id="why-porimix" className="min-h-screen flex items-center py-16 md:py-20 bg-brand-dark text-white"><div className="w-full px-4 sm:px-6 lg:px-8"><div className="text-center mb-10"><p className="text-brand-yellow font-black uppercase tracking-[.25em] text-sm mb-3">Why choose Porimix?</p><h2 className="brand-display text-5xl md:text-7xl">Made with care.<br />Loved by all.</h2></div><div className="grid grid-cols-2 md:grid-cols-5 gap-5">{[["🌿", "100% Natural", "No artificial colours, flavours or chemicals"], ["🛡️", "Quality Assured", "Strict quality checks at every step"], ["💧", "Fresh & Crispy", "Perfect blend of taste and crunch"], ["📦", "Safe Packaging", "Packed in hygienic and safe material"], ["♥", "Loved by All", "Preferred choice of our customers"]].map(([icon, title, text]) => <div key={title} className="text-center border-t-2 border-brand-yellow pt-5 hover:-translate-y-2 transition-transform"><div className="text-3xl mb-3">{icon}</div><h3 className="text-brand-yellow font-black text-sm sm:text-base">{title}</h3><p className="text-xs text-gray-300 mt-2 leading-relaxed">{text}</p></div>)}</div></div></section>

      <section id="gallery" className="py-16 md:py-20 bg-brand-light"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-end justify-between gap-4 mb-8"><div><p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-3">Porimix gallery</p><h2 className="brand-display text-5xl md:text-7xl text-brand-dark">See the<br />crunch.</h2></div><Link href="/gallery" className="hidden sm:inline-block bg-brand-red text-white px-5 py-3 font-black uppercase text-sm hover:bg-brand-dark">More photos</Link></div><div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">{["/picture1.jpeg", "/picture7.png", "/picture12.jpeg", "/picture13.jpeg", "/picture14.jpg", "/picture15.jpeg", "/picture16.jpeg", "/picture18.png"].map((image, index) => <div key={image} className={`overflow-hidden rounded-xl border-2 border-brand-dark/10 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><img src={image} alt={`Porimix gallery ${index + 1}`} className="w-full h-full min-h-32 object-cover hover:scale-105" /></div>)}</div></div></section>

      <section id="franchise" className="py-16 md:py-24 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-brand-yellow font-black uppercase tracking-[.25em] text-sm mb-4">Grow with Porimix</p>
            <h2 className="brand-display text-5xl md:text-7xl mb-6">Bring the<br /><span className="text-brand-yellow">crunch</span><br />to your city.</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg">Join Porimix and bring fresh, spicy street snacks to more food lovers. Tell us about yourself and our team will get in touch.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm"><div className="border-t-2 border-white/50 pt-3"><strong className="text-2xl font-black block">Fresh</strong><span className="text-sm text-white/75">Daily snack culture</span></div><div className="border-t-2 border-white/50 pt-3"><strong className="text-2xl font-black block">Local</strong><span className="text-sm text-white/75">Built for your market</span></div></div>
          </div>
          <FormsparkForm formId="franchise" className="bg-white text-brand-dark p-5 sm:p-8 md:p-10 brand-sticker grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="sm:col-span-2 text-2xl md:text-3xl font-black">Start your franchise enquiry</h3>
            <p className="sm:col-span-2 text-gray-600 mb-2">Share your details and we&apos;ll call you back.</p>
            <label className="flex flex-col gap-2 font-bold text-sm">Full name<input required type="text" name="name" placeholder="Your name" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Phone number<input required type="tel" name="phone" placeholder="10-digit mobile number" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Email address<input required type="email" name="email" placeholder="you@example.com" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Preferred city<input required type="text" name="city" placeholder="City or town" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="sm:col-span-2 flex flex-col gap-2 font-bold text-sm">Tell us about your investment plan<select required name="investment_plan" defaultValue="" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red"><option value="" disabled>Select an option</option><option>Under ₹5 lakhs</option><option>₹5–10 lakhs</option><option>Above ₹10 lakhs</option></select></label>
            <button type="submit" className="sm:col-span-2 bg-brand-yellow hover:bg-brand-orange px-6 py-4 font-black uppercase tracking-wide transition-colors">Submit enquiry</button>
          </FormsparkForm>
        </div>
      </section>

      <section id="location" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-3">Visit Porimix</p><h2 className="brand-display text-5xl md:text-6xl text-brand-dark mb-4">Come hungry.<br />Leave crunchy.</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{ name: "Main Branch", address: "Kumaran Department Store, 11, Red Cross Rd, Anna Nagar, Palani – 624601", mapUrl: "https://maps.app.goo.gl/sxpwZnWjwCEQ3LCt6", embedUrl: "https://www.google.com/maps?q=10.4531097,77.5102088&z=16&output=embed" }, { name: "Branch 2", address: "Porimix, Palani, Tamil Nadu.", mapUrl: "https://maps.app.goo.gl/RaUey2y8HfGaFMpEA", embedUrl: "https://www.google.com/maps?q=10.447745,77.532953&z=16&output=embed" }, { name: "Branch 3", address: "Porimix, Palani, Tamil Nadu.", mapUrl: "https://maps.app.goo.gl/gojcLBZjFJWMUHNUA", embedUrl: "https://www.google.com/maps?q=10.450578,77.516828&z=16&output=embed" }].map((loc) => <div key={loc.name} className="bg-brand-light p-6 brand-sticker flex flex-col h-full"><div className="mb-3 text-3xl">📍</div><h3 className="text-2xl font-black text-brand-dark mb-3">{loc.name}</h3><p className="text-gray-700 mb-5">{loc.address}</p><iframe src={loc.embedUrl} className="w-full h-56 mb-5 border-2 border-brand-dark" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${loc.name} map`} /><a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-4 py-3 font-bold text-center hover:bg-brand-dark transition-colors">Open in Maps</a></div>)}</div></div></section>
      <section id="contact" className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-brand-red font-black uppercase tracking-[.25em] text-sm mb-4">Get in touch</p>
            <h2 className="brand-display text-5xl md:text-7xl text-brand-dark mb-6">Let&apos;s talk<br />snacks.</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">Have a question, feedback, or want to know more about Porimix? Send us a message and our team will get back to you.</p>
            <div className="mt-8 space-y-4 font-bold"><a href="tel:+917010760433" className="block text-brand-red hover:text-brand-dark">07010760433</a><p>Kumaran Department Store, 11, Red Cross Rd, Anna Nagar, Palani – 624601</p></div>
          </div>
          <FormsparkForm formId="contact" className="bg-white p-5 sm:p-8 md:p-10 brand-sticker grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="sm:col-span-2 text-2xl md:text-3xl font-black text-brand-dark">Contact Porimix</h3>
            <label className="flex flex-col gap-2 font-bold text-sm">Full name<input required type="text" name="name" placeholder="Your name" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Email address<input required type="email" name="email" placeholder="you@example.com" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Phone number<input type="tel" name="phone" placeholder="Your phone number" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm">Subject<input required type="text" name="subject" placeholder="How can we help?" className="border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <label className="sm:col-span-2 flex flex-col gap-2 font-bold text-sm">Your message<textarea required name="message" rows={5} placeholder="Write your message here..." className="resize-y border-2 border-gray-200 px-4 py-3 font-normal outline-none focus:border-brand-red" /></label>
            <button type="submit" className="sm:col-span-2 bg-brand-red text-white hover:bg-brand-dark px-6 py-4 font-black uppercase tracking-wide transition-colors">Send message</button>
          </FormsparkForm>
        </div>
      </section>
      <Footer /><FloatingWhatsApp />
    </main>
  );
}
