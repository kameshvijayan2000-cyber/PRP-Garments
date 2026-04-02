import { motion } from 'motion/react';
import { Cpu, Factory, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { label: "Production Capacity", value: "500", unit: "Pcs / Day" },
  { label: "Modern Machines", value: "30", unit: "Units" },
  { label: "Skilled Staff", value: "45", unit: "Employees" }
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-amber-400 uppercase mb-4">Our Infrastructure</h2>
            <h3 className="text-4xl font-bold mb-6">State-of-the-Art Manufacturing Facility</h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Our facility in Tiruppur is equipped with the latest industrial sewing machines 
              and advanced finishing equipment. We maintain a clean, 
              safe, and highly efficient workspace designed for scalable bulk production.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-amber-500 pl-6">
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-blue-300 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-xs text-blue-400 mt-1">{stat.unit}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "Juki & Brother Industrial Sewing Machines",
                "Advanced Steam Pressing & Finishing Units"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-amber-500/20 p-1 rounded-full">
                    <Zap size={14} className="text-amber-400" />
                  </div>
                  <span className="text-blue-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 px-1">Production Area</p>
                <img
                  src="/production-packing.jpeg"
                  alt="Manufacturing Facility"
                  className="rounded-2xl w-full aspect-video object-cover shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 px-1">Manufacturing Unit</p>
                <img
                  src="/WhatsApp Image 2026-04-02 at 10.43.38 AM.jpeg"
                  alt="Manufacturing Unit"
                  className="rounded-2xl w-full aspect-video object-cover shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
