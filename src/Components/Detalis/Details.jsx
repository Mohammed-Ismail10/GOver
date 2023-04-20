import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getGameDetails } from "../Redux/DetailsSlice.js";

export default function Details() {
  let dispatch = useDispatch();
  let param = useParams();

  const [game, setGame] = useState({});

  async function getDetails(id) {
    let { payload } = await dispatch(getGameDetails(id));
    setGame(payload);
  }

  useEffect(() => {
    getDetails(param.id);
  }, []);

  return (
    <>
    <Helmet>
      <title>Game details</title>
    </Helmet>
      <section
        style={{
          backgroundImage: `url(https://www.freetogame.com/g/${game.id}/background.jpg)`,
        }}
        className="pt-5 bg-details"
      >
        <div className="overlay">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <div className="position-relative rounded-2 overflow-hidden mb-4">
                    <video
                      loop
                      muted
                      autoPlay
                      className="w-100"
                      src={`https://www.freetogame.com/g/${game.id}/videoplayback.webm`}
                    ></video>
                    <img
                      className="w-100 position-absolute start-0 h-100 show-video"
                      src={game.thumbnail}
                      alt={game.title}
                    />
                  </div>
                  <div className="row justify-content-between me-0 pe-0">
                    <div className="col-3 col-lg-2 me-lg-3 me-0">
                      <span className="btn bg-card text-white-50 btn-free">
                        FREE
                      </span>
                    </div>
                    <div className="col me-0 pe-0">
                      <Link
                        target={"_blank"}
                        className="btn btn-primary fw-bold text-white w-100"
                        to={game.freetogame_profile_url}
                      >
                        PLAY NOW
                        <i class="ms-1 fa-solid fa-arrow-right-from-bracket"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="text-white-50">
                  <h2 className="fs-1">{game.title}</h2>
                  <h5 className="h6 fs-20">About {game.title}</h5>
                  <p className="fs-20">{game.description}</p>
                  <h3 className="h4">{game.title} Screenshots</h3>
                  <div
                    id="carouselExampleInterval"
                    class="carousel slide mb-4"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      {game.screenshots?.map((screen) => (
                        <div
                          key={screen.id}
                          class="carousel-item active"
                          data-bs-interval="2000"
                        >
                          <img
                            src={screen.image}
                            class="d-block w-100"
                            alt={`game screenshots`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3>Additional Information</h3>
                  <div className="row mt-4">
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Title</span>
                      <p>{game.title}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Developer</span>
                      <p>{game.developer}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Publisher</span>
                      <p>{game.publisher}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Release</span>
                      <p>{game.release_date}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Genre</span>
                      <p>{game.genre}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">Platform</span>
                      
                      <p>{game.platform === "PC (Windows)" ? (
                    <i class="fa-brands fa-windows text-secondary"></i>
                  ) : (
                    <i class="fa-solid fa-window-maximize text-secondary"></i>
                  )} {game.platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
