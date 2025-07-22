import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 p-4 bg-white border-r">
      <nav className="flex flex-col gap-4">
        <NavLink to="/" className="hover:text-primary">Home</NavLink>
        <NavLink to="/search" className="hover:text-primary">Search</NavLink>
        <NavLink to="/profile" className="hover:text-primary">Profile</NavLink>
      </nav>
    </aside>
  );
}
