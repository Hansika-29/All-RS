// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, LogOut, User } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-white">
        📚 All-RS
      </Link>

      <div className="flex items-center gap-4">
        {/* Search bar (dummy for now) */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none w-56"
        />

        {/* Avatar + Dropdown */}
        <div className="relative">
          <img
            src="https://api.dicebear.com/7.x/thumbs/svg?seed=booklover"
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-accent"
            onClick={toggleDropdown}
          />

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-xl shadow-lg z-50 animate-slide-down">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-accent/20 flex items-center gap-2"
              >
                <User size={18} /> Profile
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full text-left px-4 py-2 hover:bg-accent/20 flex items-center gap-2"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                Toggle Theme
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-accent/20 flex items-center gap-2 text-red-500">
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
