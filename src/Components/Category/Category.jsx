import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategory } from "../Redux/CategorySlice.js";
import Template from "../Template/Template.jsx";

export default function Category() {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [num, setNum] = useState(0);

  let param = useParams();

  async function getGames(category) {
    setLoading(true);
    let { payload } = await dispatch(getCategory(category));
    setGames(payload);
    setLoading(false);
    setNum(20);
  }

  function increaseNum(){
    setNum(num+20);
  }






  useEffect(() => {
    if (param.racing == "open") {
      getGames(param.racing + `-world`);
    } else if (param.racing == "actionr") {
      getGames(param.racing.slice(0, -1) + `-rpg`);
    } else if (param.racing == "battle") {
      getGames(param.racing + `-royale`);
    } else {
      getGames(param.racing);
    }
  }, [param]);








  return (
    <>
    <Helmet>
      <title>Category {param.racing}</title>
    </Helmet>
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {loading ? (
              <span className="rounded d-inline-block text-center text-white">
                <i className="fa-5x fas fa-spinner fa-spin"></i>
              </span>
            ) : (
              games?.slice(0,num).map((game) => <Template key={game?.id} game={game} />)
            )}
          </div>
          {num>=games.length?null:<div className="text-center mt-4">
        <button onClick={increaseNum} className="btn btn-outline-secondary">More Games
        <i class="ms-1 fa-solid fa-angle-right"></i></button>
        </div>}
        </div>
      </section>
    </>
  );
}
