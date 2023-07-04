"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Tags() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    router.push(`/tags?q=${searchQuery}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        placeholder="키워드 검색"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
