import { motion } from 'motion/react';

const products = [
  {
    title: "Cotton Shorts (Yellow)",
    image: "/shorts-yellow.png.jpeg",
    composition: "100% Cotton",
    gsm: "160 GSM",
    custom: "Soft Elastic, Durable Stitching"
  },
  {
    title: "Cotton Shorts (Pink)",
    image: "/shorts-pink.png.jpeg",
    composition: "100% Cotton",
    gsm: "160 GSM",
    custom: "Drawstring, Side Pockets"
  },
  {
    title: "Striped Frock",
    image: "/frock-striped.png.jpeg",
    composition: "Interlock Fabric with Striped Design",
    gsm: "140 GSM",
    custom: "Soft Finish, Elegant Bow"
  },
  {
    title: "Premium Hoodie (Pink)",
    image: "/hoodie-pink.png.jpeg",
    composition: "60% Cotton / 40% Polyester Fleece",
    gsm: "260 GSM",
    custom: "Custom Hood, Kangaroo Pocket"
  },
  {
    title: "Zip-up Hoodie (Blue)",
    image: "/hoodie-blue.png.jpeg",
    composition: "60% Cotton / 40% Polyester Fleece",
    gsm: "260 GSM",
    custom: "High-Quality Zipper, Ribbed Cuffs"
  },
  {
    title: "Comfort Sweatshirt",
    image: "/sweatshirt-comfort.png.jpeg",
    composition: "60% Cotton / 40% Polyester Fleece",
    gsm: "260 GSM",
    custom: "Classic Crew Neck, Soft Interior"
  },
  {
    title: "Graphic T-Shirt",
    image: "/tshirt-graphic.png.jpeg",
    composition: "100% Cotton",
    gsm: "160 GSM",
    custom: "Vibrant Screen Printing"
  },
  {
    title: "Long Sleeve Tee",
    image: "/tshirt-longsleeve.png.jpeg",
    composition: "100% Cotton",
    gsm: "160 GSM",
    custom: "Comfort Fit, Custom Branding"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">Our Product Range</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Premium Apparel Categories</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our extensive range of high-quality apparel is manufactured in-house and exported globally with a commitment to on-time delivery. We take pride in our high customer satisfaction rates, consistently receiving repeat orders thanks to our exceptional quality and competitive pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-amber-600 text-white font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Inquire Now
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-3">{product.title}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">Fabric:</span> {product.composition}</p>
                  <p><span className="font-semibold text-gray-900">GSM:</span> {product.gsm}</p>
                  <p><span className="font-semibold text-gray-900">Custom:</span> {product.custom}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-blue-900 rounded-2xl text-white max-w-4xl">
            <h4 className="text-2xl font-bold mb-4">Custom Bulk Orders</h4>
            <p className="text-blue-100 mb-6">
              Don't see what you're looking for? We specialize in custom manufacturing based on your tech packs and samples.
            </p>
            <a href="#contact" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
