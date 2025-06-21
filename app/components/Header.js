"use client";
import SearchBar from "./SearchBar";

export default function Header() {

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <div className="text-blue-700 text-xl font-bold">
          KıbrısPazar
        </div>
        <SearchBar />
      </div>
    </header>
  );
}