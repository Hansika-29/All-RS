import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection({ title, items }) {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <section className="px-6 py-10 bg-black">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-white font-bold mb-4"
      >
        {title}
      </motion.h2>
      <Slider {...settings}>
        {items.map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-2">
            <div className="rounded-lg overflow-hidden shadow-md relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition">
                {item.title}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
