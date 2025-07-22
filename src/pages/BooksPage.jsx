// src/pages/BooksPage.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidebarFilter from "../components/SidebarFilter";
import BookCarousel from "../components/BookCarousel";
import UserShelf from "../components/UserShelf";

export default function BooksPage() {
  return (
    <>
      <Header />
      <div className="flex bg-light gray min-h-screen text-black">
        {/* Sidebar Filters */}
        <aside className="w-1/4 p-6 border-r border-gray-300">
          <SidebarFilter />
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-8 space-y-12">
          <h1 className="text-4xl font-bold mb-6">📚 Book Recommendations</h1>

          {/* Book Carousels by Category */}
          <BookCarousel title="🔥 Bestsellers" category="bestsellers" />
          <BookCarousel title="⭐ Top Rated" category="topRated" />
          <BookCarousel title="💘 Rom-Com" category="romcom" />
          <BookCarousel title="🔪 Thriller" category="thriller" />
          <BookCarousel title="🧙‍♂️ Fantasy" category="fantasy" />
          <BookCarousel title="🎯 Self-help" category="selfhelp" />

          {/* User's Shelf Section */}
          <UserShelf />
        </main>
      </div>
      <Footer />
    </>
  );
}
