import React, { useMemo, useState } from "react";

let messages = [
  "What time is the meeting?",
  "ANN: the server will be down tonight",
  "Lunch was great today",
  "Can someone help me with this bug?",
  "ANN: the office will be closed tomorrow",
];

export default function MessageCategorizer() {
  const [toggle, setToggle] = useState(false);

  let categories = useMemo(() => {
    let questions = [];
    let announcements = [];
    let general = [];
    messages.forEach((message) => {
      if (message.includes("?")) {
        questions.push(message);
      } else if (message.includes("ANN:")) {
        announcements.push(message);
      } else {
        general.push(message);
      }
    });
    return { questions, announcements, general };
  },[]);


  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Compact View</button>
      <h2>Questions</h2>
      <ul>
        {categories.questions.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <h2>Announcements</h2>
      <ul>
        {categories.announcements.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      {!toggle && (
        <>
          <h2>General</h2>
          <ul>
            {categories.general.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
