import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-header text-center text-white-50">
        <div className="container py-5">
          <h1>
            Find & track the best{" "}
            <span className="text-info">free-to-play</span> games!
          </h1>
          <p className="fw-light fs-20 text-muted">
            Track what you've played and search for what to play next! Plus get
            free premium loot!
          </p>
          <Link to={`all`}>
            <button className="btn btn-outline-secondary">Browes Games</button>
          </Link>
        </div>
      </header>
    </>
  );
}
