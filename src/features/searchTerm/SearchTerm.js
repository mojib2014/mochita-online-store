import React from "react";

export default function SearchTerm({ searchTerm, onChange }) {
  return (
    <div id="search-container">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
}
