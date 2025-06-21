"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full">
      <input
        type="text"
        placeholder="Ne arıyorsunuz?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg text-sm"
      />
      <input
        type="text"
        placeholder="Şehir (ör: Lefkoşa)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full sm:w-64 px-4 py-2 border rounded-lg text-sm"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm">
        Ara
      </button>
    </div>
  );
}