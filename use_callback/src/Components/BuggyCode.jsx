import React ,{ useMemo, useState } from "react";

const Profile = React.memo(({ user }) => {
  console.log("Profile rendered");
  return <h3>{user.name}</h3>;
});

export default function BuggyCode() {
  const [online, setOnline] = useState(true);

  const user = useMemo(() => {
    return { name: "Riya" };
  }, []);

  return (
    <>
      <button onClick={() => setOnline(!online)}>
        Toggle Status
      </button>
      <Profile user={user} />
    </>
  );
}

