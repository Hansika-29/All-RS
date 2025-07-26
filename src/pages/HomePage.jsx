import HeroCarousel from "../components/HeroCarousel";
import CategoryGrid from "../components/CategoryGrid";
import CarouselSection from "../components/CarouselSection";
import StatsSection from "../components/StatsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { BookOpen, Film, Tv, Music, Gamepad, Star } from "lucide-react";

const categories = [
  { icon: <BookOpen size={18} />, title: "Books", description: "Top books", link: "/app/books" },
  { icon: <Film size={18} />, title: "Movies", description: "Top movies", link: "/app/movies" },
  { icon: <Tv size={18} />, title: "Series", description: "Top series", link: "/app/series" },
  { icon: <Music size={18} />, title: "Music", description: "Top music", link: "/app/music" },
  { icon: <Gamepad size={18} />, title: "Games", description: "Top games", link: "/app/games" },
  { icon: <Star size={18} />, title: "Top Picks", description: "Curated picks", link: "/app/top-picks" },
];

// Dummy data for carousels
const dummyItems = Array(10).fill(0).map((_, i) => ({
  title: `Item ${i + 1}`,
  image: `/assets/sample${(i % 5) + 1}.jpg`,
}));

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
           <HeroCarousel />  
      <CategoryGrid categories={categories} />
      <CarouselSection title="Top Books" items={dummyItems} />
      <CarouselSection title="Top Movies" items={dummyItems} />
      <CarouselSection title="Top Series" items={dummyItems} />
      <CarouselSection title="Top Music" items={dummyItems} />
      <StatsSection />
      <Footer />
    </div>
  );
}
