import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/netflix-bg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-bold mb-6"
        >
          Discover Entertainment Like Never Before 🎉
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700">
            <Play className="inline-block mr-2" size={18} /> Get Started
          </button>
          
        </motion.div>
      </div>
    </section>
  );
}
