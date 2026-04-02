import { motion } from 'motion/react';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">About PRP Garments</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              A Legacy of Textile Excellence in Tiruppur
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              PRP Garments is a premier export-oriented garment manufacturer based in the textile hub of Tiruppur, India. 
              We specialize in providing end-to-end manufacturing solutions, catering to international apparel brands, 
              importers, and wholesalers worldwide.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              With deep expertise in export orders and full-package production capability, we ensure that every garment 
              leaving our facility meets the highest global standards of quality and craftsmanship.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Target className="text-blue-900" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-sm">Deliver quality garments with consistency and efficiency to global partners.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">
                  <Eye className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-sm">To be the most reliable and preferred global garment manufacturing partner.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/production-sewing.jpeg"
                alt="Factory Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <Award size={40} className="text-amber-400" />
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-blue-200">Export Quality</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users size={40} className="text-amber-400" />
                <div>
                  <p className="text-3xl font-bold">45+</p>
                  <p className="text-sm text-blue-200">Skilled Staff</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
