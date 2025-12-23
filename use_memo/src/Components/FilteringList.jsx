import React, { useMemo, useState } from "react";

export default function FilteringList() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  const users = Array.from({ length: 10000 }, (_, i) => `${i + 1}`);

  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter(user =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // dependency matters, shockingly

  return (
    <div style={{ background: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000" }}>
      <input
        type="text"
        value={search}
        placeholder="Search User"
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
