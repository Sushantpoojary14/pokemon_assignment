"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../utils/commonFunc";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const router = useRouter();
  const bounce = useDebounce(
    () => router.push(search ? `?page=1&search=${search}` : `?page=1`),
    800
  );

  useEffect(() => {
    if (active) {
      bounce();
    }
  }, [search]);

  return (
    <div className="flex justify-center my-6">
      <input
        onFocus={() => {
          console.log("focus");
          
          setActive(true)}}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokemon..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
      />
    </div>
  );
}
