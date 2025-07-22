// src/components/SidebarFilter.jsx
export default function SidebarFilter() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by author or title"
        className="w-full p-2 mb-4 rounded bg-gray-300 text-black"
      />
      <h2 className="text-xl font-semibold mb-2">Filter by Genre</h2>
      <ul className="space-y-2">
        {["Rom-Com", "Thriller", "Fantasy", "Non-Fiction", "Sci-Fi", "Biography"].map((genre) => (
          <li key={genre}>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {genre}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
