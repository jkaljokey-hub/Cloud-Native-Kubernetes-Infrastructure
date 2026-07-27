import { useEffect, useState } from "react";

function ApiInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/info")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading backend...</p>;

  return (
    <div
      style={{
        margin: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Backend Information</h2>

      <p><strong>Application:</strong> {data.app}</p>
      <p><strong>Environment:</strong> {data.environment}</p>
      <p><strong>Hostname:</strong> {data.hostname}</p>
    </div>
  );
}

export default ApiInfo;

