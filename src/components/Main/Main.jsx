// Main.js
import { useState } from "react";
import "./Main.css";

export default function Main({ contents, setContents }) {
  const generateRandomData = () => {
    const newData = {
      id: contents.length + 1,
      name: `User ${contents.length + 1}`,
      age: Math.floor(Math.random() * 50) + 20,
      email: `user${contents.length + 1}@example.com`,
      isActive: Math.random() > 0.5,
      address: {
        street: `${Math.floor(Math.random() * 1000)} Random St`,
        city: "Random City",
        zipCode: `${Math.floor(Math.random() * 90000) + 10000}`,
      },
      tags: ["user"],
    };

    setContents((e) => [...e, newData]);
  };

  return (
    <div className="main">
      <h1>Data List</h1>
      <button onClick={generateRandomData}>Generate Random Data</button>
      <ul>
        {contents.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
            <p>Active: {item.isActive ? "Yes" : "No"}</p>
            <p>
              Address: {item.address.street}, {item.address.city},{" "}
              {item.address.zipCode}
            </p>
            <p>Tags: {item.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
