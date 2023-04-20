import React from "react";
import { Link } from "react-router-dom";

export default function Template({ game }) {
  return (
    <>
      <div className="col-md-3">
        <Link className="text-decoration-none" to={`/details/${game.id}`}>
          <div className="card cursor-pointer scale bg-card shadow rounded-top-0 border-0">
            <div>
              <img className="w-100 " src={game?.thumbnail} alt={game.title} />
            </div>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-white-50 fs-18 text-card-title">
                  {game.title}
                </h4>
                <span className="bg-primary rounded-3 text-white p-2 badge">
                  FREE
                </span>
              </div>
              <p className="text-muted fs-14">
                {game.short_description.split("").slice(0, 25).join("")}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <i class="fa-solid fa-square-plus text-white-50"></i>
                <div>
                  <span className="badge text-dark bg-secondary rounded me-2 genre fs-10 fw-bold">
                    {game.genre}
                  </span>
                  {game.platform === "PC (Windows)" ? (
                    <i class="fa-brands fa-windows text-secondary"></i>
                  ) : (
                    <i class="fa-solid fa-window-maximize text-secondary"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
