// src/components/BookCarousel.jsx
import { booksByCategory } from "../data/books";
import BookCard from "./BookCard";

export default function BookCarousel({ title, category }) {
  const books = booksByCategory[category] || [];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
