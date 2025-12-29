import React, { useCallback, useMemo } from "react";

export default function ReportPanel() {
  let summary = useMemo(() => {}, []);

  let handler = useCallback(() => {
    
  }, []);

  return (
    <div>
      <Child obj={{ name: "Akash" }} refresh={() => {}} />
    </div>
  );
}

let Child = React.memo(({ obj, refresh }) => {
  return <div>{obj.name}</div>;
});
