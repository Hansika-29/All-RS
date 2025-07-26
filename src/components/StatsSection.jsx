import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="text-center px-6 py-16 bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Discover the Best of Everything
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[
          { end: 10000, label: "Books Recommended" },
          { end: 5000, label: "Playlists Curated" },
          { end: 50000, label: "User Ratings" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-4xl font-extrabold text-yellow-400">
              <CountUp end={stat.end} duration={3} separator="," />+
            </h3>
            <p className="mt-2 text-white">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
