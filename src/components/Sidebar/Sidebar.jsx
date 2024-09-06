// Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ contents }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`sidebar ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>Table of Contents</h2>
      <ul>
        {contents.map((item) => (
          <li key={item.id}>
            <div className="content-item">
              <strong>Name:</strong> {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
