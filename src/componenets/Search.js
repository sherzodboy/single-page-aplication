import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          style={{ fontWeight: "900", fontSize: "23px" }}
          type="search"
          id="search-filed"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            fontWeight: "bold",
            background: "green",
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}
