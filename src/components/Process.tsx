import { motion } from 'motion/react';
import { ShoppingBag, Scissors, Droplets, Layout, Layers, Package, Truck, Zap } from 'lucide-react';

const steps = [
  {
    title: "Yarn Procurement",
    desc: "Sourcing high-quality yarn from trusted spinning mills.",
    icon: Zap,
    image: "/yarn-new.png"
  },
  {
    title: "Knitting",
    desc: "Converting yarn into fabric using advanced circular knitting machines.",
    icon: Layers,
    image: "/Knitting machine.jpg"
  },
  {
    title: "Dyeing & Processing",
    desc: "Eco-friendly dyeing and finishing for superior color fastness.",
    icon: Droplets,
    image: "/Natural_dye_colour_wheel_1200x630.jpg"
  },
  {
    title: "Cutting",
    desc: "Precision cutting using master patterns to ensure perfect fit and minimal waste.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Stitching",
    desc: "Industrial sewing by skilled craftsmen with inline quality checks.",
    icon: Layout,
    image: "/WhatsApp Image 2026-04-01 at 9.51.43 PM.jpeg"
  },
  {
    title: "Finishing & Ironing",
    desc: "Steam pressing and final detailing for a premium look.",
    icon: Zap,
    image: "/production-ironing.jpeg"
  },
  {
    title: "Packing",
    desc: "Export-standard packing with barcode and size labeling.",
    icon: Package,
    image: "/WhatsApp Image 2026-04-01 at 9.51.45 PM.jpeg"
  },
  {
    title: "Shipment",
    desc: "Global logistics support for timely delivery to your doorstep.",
    icon: Truck,
    image: "/shipment-new.jpeg"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Our Workflow</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-4">End-to-End Manufacturing Process</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain complete control over the production cycle to ensure quality at every single stage.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`relative rounded-2xl overflow-hidden shadow-lg ${idx === 7 ? 'aspect-[3/4] max-w-sm mx-auto' : 'aspect-video'}`}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                <div className="lg:w-12 flex justify-center relative z-10">
                  <div className="bg-blue-900 text-white p-3 rounded-full shadow-xl">
                    <step.icon size={24} />
                  </div>
                </div>

                <div className="flex-1 w-full text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
