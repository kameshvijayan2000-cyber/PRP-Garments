import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold tracking-tighter mb-6 block">
              PRP <span className="text-amber-500">GARMENTS</span>
            </span>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Leading garment manufacturer from Tiruppur, India. Delivering premium export quality apparel to global brands since inception.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-900 p-2 rounded-lg hover:bg-amber-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-blue-900 p-2 rounded-lg hover:bg-amber-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-blue-900 p-2 rounded-lg hover:bg-amber-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-900 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-blue-200">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Our Products</a></li>
              <li><a href="#process" className="hover:text-amber-500 transition-colors">Manufacturing Process</a></li>
              <li><a href="#infrastructure" className="hover:text-amber-500 transition-colors">Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-900 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-6 text-blue-200">
              <li className="flex gap-4">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>78/1, PRP Garments, Pillayar Nagar Extn, Tiruppur - 641606</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <span>+91 7708058574<br />+91 7339287888</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <span className="break-all">rvravikumar252@gmail.com<br />kameshvijayan2000@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-900 pb-2 inline-block">Newsletter</h4>
            <p className="text-blue-200 mb-6">Subscribe to get latest updates on our production and new fabric arrivals.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-blue-900 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <button className="bg-amber-600 px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-900 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} PRP Garments. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-all shadow-lg group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
