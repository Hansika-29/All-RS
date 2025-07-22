// src/components/UserShelf.jsx
export default function UserShelf() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">📚 Your Shelves</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 p-4 rounded">
          <h3 className="text-xl mb-2">📖 Continue Reading</h3>
          <p className="text-gray-700 italic">You haven't started any book yet.</p>
        </div>
        <div className="bg-gray-300 p-4 rounded">
          <h3 className="text-xl mb-2">📘 Previously Read</h3>
          <p className="text-gray-700 italic">No history available.</p>
        </div>
      </div>
    </section>
  );
}
