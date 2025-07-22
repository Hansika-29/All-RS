// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RecommendPage from "./pages/RecommendPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

// New pages for each category
import BooksPage from "./pages/BooksPage";
import MoviesPage from "./pages/MoviesPage";
import GamesPage from "./pages/GamesPage";
import MusicPage from "./pages/MusicPage";
import SeriesPage from "./pages/SeriesPage";
import TopPicksPage from "./pages/TopPicksPage";

function App() {
  return (
    <Routes>
      {/* Default login page */}
      <Route path="/" element={<LoginPage />} />

      {/* Optional route alias for login */}
      <Route path="/login-auth" element={<LoginPage />} />

      {/* Authenticated app layout with nested routes */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="recommend" element={<RecommendPage />} />
        <Route path="profile" element={<ProfilePage />} />

        {/* Add category pages here */}
        <Route path="books" element={<BooksPage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="music" element={<MusicPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="top-picks" element={<TopPicksPage />} />
      </Route>

      {/* Redirect any unknown routes to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
