import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-blue-900 mb-6">Let's Discuss Your Bulk Order</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Ready to start your production? Send us your requirements, tech packs, or sample requests. 
              Our team will get back to you with a competitive quote within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    78/1, PRP Garments,<br />
                    Pillayar Nagar Extension, East Muthanampalayam,<br />
                    Tiruppur, Tamil Nadu - 641606, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">+91 7708058574</p>
                  <p className="text-gray-600">+91 7339287888</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Email Addresses</h4>
                  <p className="text-gray-600">rvravikumar252@gmail.com</p>
                  <p className="text-gray-600">kameshvijayan2000@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-inner border border-gray-100">
              {/* Google Maps Embed Placeholder */}
              <iframe
                title="PRP Garments Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d77.3456789!3d11.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3N8KwMjAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-blue-900 mb-8">Send Your Requirement</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Requirement</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your order (Quantity, Fabric, Style...)"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Send Inquiry <Send size={20} />
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 mb-4">Or chat with us directly</p>
              <a
                href="https://wa.me/917708058574"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors"
              >
                <MessageSquare size={24} /> WhatsApp Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
