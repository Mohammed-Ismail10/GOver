import React from "react";
import { Link } from "react-router-dom";
// import naruto from '../../img/thumbnail.jpg'
export default function Recomendation() {
  return (
    <>
      <section className="container py-5">
        <h2 className="text-white-50 h4 mb-5">
          <i class="fa-solid fa-robot"></i>Personalized Recommendations
        </h2>
        <div className="row">
          <div className="col-md-4">
            <Link className="text-decoration-none" to={`/details/365`}>
            <div className="card cursor-pointer scale bg-card shadow border-0 mb-5 mt-lg-0">
              <img
                src={`https://www.freetogame.com/g/365/thumbnail.jpg`}
                alt="naruto online"
              />
              <div className="d-flex p-3 justify-content-between align-items-center">
                <h3 className="text-white-50 h4">Naruto Online</h3>
                <span
                  className="bg-primary rounded-3 text-white p-2 badge"
                >
                  FREE
                </span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="text-decoration-none" to={`/details/475`}>
            <div className="card cursor-pointer scale bg-card shadow border-0 mb-5 mt-lg-0">
              <img
                src={`https://www.freetogame.com/g/475/thumbnail.jpg`}
                alt="naruto online"
              />
              <div className="d-flex p-3 justify-content-between align-items-center">
                <h3 className="text-white-50 h4">Naruto Online</h3>
                <span
                  className="bg-primary rounded-3 text-white p-2 badge"
                >
                  FREE
                </span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link className="text-decoration-none" to={`/details/523`}>
            <div className="card cursor-pointer scale bg-card shadow border-0 mb-5 mt-lg-0">
              <img
                src={`https://www.freetogame.com/g/523/thumbnail.jpg`}
                alt="naruto online"
              />
              <div className="d-flex p-3 justify-content-between align-items-center">
                <h3 className="text-white-50 h4">Naruto Online</h3>
                <span
                  className="bg-primary rounded-3 text-white p-2 badge"
                >
                  FREE
                </span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
