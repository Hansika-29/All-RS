// src/components/BookCard.jsx
export default function BookCard({ book }) {
  return (
    <div className="min-w-[160px] bg-gray-100 p-4 rounded shadow hover:scale-105 transition-transform">
      <img src={book.cover} alt={book.title} className="h-40 w-full object-cover rounded mb-2" />
      <h3 className="text-md font-bold">{book.title}</h3>
      <p className="text-sm text-gray-400">{book.author}</p>
      <p className="text-yellow-400 text-sm">⭐ {book.rating}</p>
    </div>
  );
}
