// src/pages/HomePage.jsx

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BookOpen, Film, Music, Gamepad, Tv, Star } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const categories = [
  {
    icon: <BookOpen size={18} />,
    title: "Books",
    description: "Explore top book picks across genres, from timeless classics to trending novels.",
    longDescription:
      "Dive into worlds of imagination, wisdom, and emotion through our curated book selection. From timeless literary classics to trending bestsellers, there's something for every reader. Whether you're into fiction, non-fiction, or poetry, we've got you covered. Rediscover your love for reading with recommendations tailored to your taste.",
    link: "/app/books",
    image: "/assets/books.jpg",
  },
  {
    icon: <Film size={18} />,
    title: "Movies",
    description: "Discover blockbuster hits, indie gems, and personalized movie suggestions.",
    longDescription:
      "Step into the cinematic universe with our handpicked movie selections. Enjoy everything from high-octane action flicks to emotional dramas and clever comedies. Our platform brings you the best of Hollywood, Bollywood, and beyond. Ideal for casual viewers and film buffs alike.",
    link: "/app/movies",
    image: "/assets/movies.jpg",
  },
  {
    icon: <Tv size={18} />,
    title: "Series",
    description: "Stay updated with the latest TV series and binge-worthy recommendations.",
    longDescription:
      "Looking for your next binge-watch? We've compiled the best of gripping dramas, hilarious sitcoms, and thrilling sci-fi series. Keep up with trending shows or revisit timeless TV classics. Whether it's a quick mini-series or a multi-season epic, we help you find what’s worth your time.",
    link: "/app/series",
    image: "/assets/series.jpg",
  },
  {
    icon: <Music size={18} />,
    title: "Music",
    description: "Get music recommendations tailored to your mood, taste, and vibe.",
    longDescription:
      "Let the music move you. From lo-fi to hip-hop, classical to pop, we’ve curated playlists and picks for every mood and moment. Discover new artists or enjoy timeless tracks that never fade. Whether you're working, relaxing, or partying — the perfect soundtrack awaits.",
    link: "/app/music",
    image: "/assets/music.jpg",
  },
  {
    icon: <Gamepad size={18} />,
    title: "Games",
    description: "Find the best games to play—from epic adventures to quick casual titles.",
    longDescription:
      "Explore a world of interactive entertainment with our top gaming picks. From immersive open-world RPGs to addictive mobile games, there’s something here for every gamer. Whether you're a casual player or a competitive pro, dive into action, strategy, sports, and more. Game on!",
    link: "/app/games",
    image: "/assets/games.jpg",
  },
  {
    icon: <Star size={18} />,
    title: "Top Picks",
    description: "Curated selections from all categories just for you.",
    longDescription: "",
    link: "/app/top-picks",
    image: "/assets/toppicks.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Discover Books, Movies, Series, Music, and Games – All in One Place 🎉
        </motion.h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Personalized recommendations curated just for you across all your favorite forms of entertainment.
        </p>
      </section>

      {/* Cards Section - Clickable Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={cat.link}
            className="bg-gray-900 text-white rounded-xl shadow-md p-4 flex gap-4 border border-gray-800 items-start hover:scale-[1.02] transition-transform"
          >
            <div className="text-white mt-1">{cat.icon}</div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">{cat.title}</h2>
              <p className="text-sm text-gray-300">{cat.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* About Title & Count Section */}
      <section className="text-center px-6 py-12 bg-black text-white">
        <h2 className="text-4xl font-bold mb-4">Discover the Best of Everything</h2>
        <p className="text-lg max-w-3xl mx-auto">
          ALL-RS is your one-stop hub to explore top-rated books, trending shows, blockbuster movies, epic games, chart-topping music, and curated recommendations — all personalized for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
          <div>
            <h3 className="text-4xl font-extrabold text-yellow-400">
              <CountUp end={10000} duration={3} separator="," />+
            </h3>
            <p className="mt-2 text-white">Books Recommended</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-yellow-400">
              <CountUp end={5000} duration={3} separator="," />+
            </h3>
            <p className="mt-2 text-white">Playlists Curated</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-yellow-400">
              <CountUp end={50000} duration={3} separator="," />+
            </h3>
            <p className="mt-2 text-white">User Ratings</p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto space-y-20 px-6">
          {categories
            .filter((cat) => cat.title !== "Top Picks")
            .map((cat, index) => (
              <motion.div
                key={cat.title + "-section"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full max-w-[400px] h-[220px] object-cover rounded-xl shadow-md"
                />
                <div className="md:w-[55%]">
                  <h3 className="text-2xl font-semibold mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-4">{cat.longDescription}</p>
                  <Link
                    to={cat.link}
                    className="inline-block px-5 py-2 bg-black text-white rounded-full shadow-md hover:bg-blue-700 transition"
                  >
                    Explore {cat.title}
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
