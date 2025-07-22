import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // 👈 navigation hook

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose?.();
      navigate("/app"); // 👈 redirect to homepage
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose?.();
      navigate("/app"); // 👈 redirect to homepage
    } catch (err) {
      setError("Google Sign-In failed.");
    }
  };

  return (
    <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-md w-full relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleEmailLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm mb-2">or</p>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
