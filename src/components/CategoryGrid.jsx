import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryGrid({ categories }) {
  return (
    <section className="bg-gray-900 py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={cat.link}
              className="bg-gray-800 text-white rounded-xl shadow-lg p-4 flex gap-4 items-start hover:scale-[1.05] transition-transform"
            >
              <div className="mt-1">{cat.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{cat.title}</h2>
                <p className="text-sm text-gray-300">{cat.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
