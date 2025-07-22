import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-100 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text + CTA */}
        <div className="flex flex-col justify-center text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            All-In-One Recommendation System
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Discover books, movies, travel spots, and more — all tailored to your preferences.
            Smart. Simple. Seamless.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/app")}
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl text-lg font-semibold transition"
            >
              Explore as Guest
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80"
            alt="Recommendation illustration"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <LoginForm onClose={() => setShowLogin(false)} />
        </div>
      )}
    </div>
  );
}
