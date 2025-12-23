import React, { useMemo, useState } from "react";

const products = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Papaya",
];
export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="Search by name.."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setPreviewMode(!previewMode)}>
        Toggle Preview Mode
      </button>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      {previewMode && <p>Preview mode enabled</p>}
    </div>
  );
}
