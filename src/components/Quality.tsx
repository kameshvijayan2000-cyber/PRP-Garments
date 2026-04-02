import { motion } from 'motion/react';
import { ShieldCheck, Search, Ruler, CheckCircle2, PackageCheck } from 'lucide-react';

const checks = [
  {
    title: "Fabric Inspection",
    desc: "Rigorous testing for shrinkage, color fastness, and GSM verification before cutting.",
    icon: Search
  },
  {
    title: "Inline Quality Check",
    desc: "Continuous monitoring at every stitching station to prevent defects at the source.",
    icon: ShieldCheck
  },
  {
    title: "Measurement Verification",
    desc: "Strict adherence to size charts and tech-pack specifications for every single piece.",
    icon: Ruler
  },
  {
    title: "Final Finishing Audit",
    desc: "100% inspection of finished garments for loose threads, stains, and overall appearance.",
    icon: CheckCircle2
  },
  {
    title: "Export Packing Standards",
    desc: "Final check of assortment, labeling, and carton strength for international transit.",
    icon: PackageCheck
  }
];

export default function Quality() {
  return (
    <section id="quality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Quality Assurance</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Zero Compromise on Quality</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our multi-stage quality control system ensures that every garment meets international export standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {checks.map((check, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-blue-900 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <check.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">{check.title}</h4>
              <p className="text-gray-600 leading-relaxed">{check.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-blue-900 rounded-2xl flex flex-col justify-center items-center text-center text-white"
          >
            <ShieldCheck size={64} className="text-amber-400 mb-6" />
            <h4 className="text-2xl font-bold mb-2">AQL 2.5 Standards</h4>
            <p className="text-blue-200">We follow international Acceptable Quality Level standards for all export orders.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
