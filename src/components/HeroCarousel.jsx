import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Discover Timeless Books 📚",
    description:
      "Explore classics, trending novels, and hidden literary gems curated for you.",
    image: "/assets/books-hero.jpg",
    cta: "Explore Books",
    link: "/app/books",
  },
  {
    title: "Movies That Captivate 🎬",
    description:
      "From blockbusters to indie gems, watch what everyone’s talking about.",
    image: "/assets/movies-hero.jpg",
    cta: "Explore Movies",
    link: "/app/movies",
  },
  {
    title: "Binge-Worthy Series 📺",
    description: "Top TV shows & series, ready for your next binge session.",
    image: "/assets/series-hero.jpg",
    cta: "Explore Series",
    link: "/app/series",
  },
  {
    title: "Music That Moves You 🎵",
    description:
      "Curated playlists and tracks tailored to your vibe and taste.",
    image: "/assets/music-hero.jpg",
    cta: "Explore Music",
    link: "/app/music",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Image background with gradient */}
      <AnimatePresence>
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Zoom animation */}
          <motion.img
            src={slides[index].image}
            alt={slides[index].title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />

          {/* Gradient only on left 50% so image on right is visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent w-[65%] md:w-[55%]"></div>
        </motion.div>
      </AnimatePresence>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 lg:px-32 max-w-[700px]">
        <motion.h1
          key={slides[index].title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white leading-snug"
        >
          {slides[index].title}
        </motion.h1>
        <motion.p
          key={slides[index].description}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-200 mb-6"
        >
          {slides[index].description}
        </motion.p>

        {/* Slimmer Button */}
        <motion.a
  href={slides[index].link}
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="w-fit px-5 py-1.5 text-sm text-white border border-white rounded-full hover:bg-white hover:text-black transition-all"
>
  {slides[index].cta}
</motion.a>


      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-red-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
