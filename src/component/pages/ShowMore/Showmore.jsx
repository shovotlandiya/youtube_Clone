import React from "react";
import "./ShowMore.css";
import ShowTop from "../../../Assets/img/showtop.png";
import Nora from "../../../Assets/img/Nora.svg";
import Flora from "../../../Assets/img/flora.svg";
import Ben from "../../../Assets/img/ben.svg";
import Philip from "../../../Assets/img/Philip.svg";
import { Link } from "react-router-dom";

function Show() {
  const [data, setData] = React.useState();
  const [render, setRender] = React.useState();
  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      const data = await res.json();

      if (data) {
        setData(data.slice(0, 1));
        setRender(data.slice(0, 20));
      }
    })();
  }, []);

  return (
    <>
      <div className="show_more">
        <img className="showtop" src={ShowTop} alt="showtop" />
        <div className="subscribtion">
          <div className="subscribtion__inner">
            <img
              className="nora__img"
              src={Nora}
              alt="Nora"
              width="80"
              height="80"
            />
            <div className="subs">
              <h2 className="subs__title">Margaret Phelps</h2>
              <p className="subs__text">245K subscribed</p>
            </div>
          </div>
          <div>
            <button className="subs__btn">Subscribe 2.3m</button>
          </div>
        </div>
        <ul className="sub__list">
          <li className="sub__item">
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                Home
              </a>
            </li>
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                Videos
              </a>
            </li>
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                Playlists
              </a>
            </li>
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                Playlists
              </a>
            </li>
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                Discussion
              </a>
            </li>
            <li className="sub__item__inner">
              <a href="#link" className="sub__link">
                About
              </a>
            </li>
            <li className="sub__item__inner">
              
            </li>
          </li>
          <li>
            <p className="subs__text subs__item__text">Recommended channel</p>
          </li>
        </ul>
        <div className="choose">
          <div className="choose__inner">
            <div>
              {data &&
                data.map((datas) => (
                  <>
                    <Link to={"/render/" + datas.id}>
                      <img className="choose__img" src={datas.url} alt="" />
                    </Link>
                  </>
                ))}
            </div>
            <div>
              <h2 className="choose__title">
                Choosing The Best Audio Player Software For Your Computer
              </h2>
              <p className="choose__text">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.
              </p>
            </div>
          </div>
          <div className="choose__right">
            <div className="choose__right__inner">
              <img src={Flora} alt="Flora" width='50'/>
              <h3 className="right__title">Flora Benson</h3>
            </div>
            <div className="choose__right__inner">
              <img src={Ben} alt="Flora" width='50'/>
              <h3 className="right__title">Violet Cobb</h3>
            </div>
            <div className="choose__right__inner">
              <img src={Philip} alt="Flora" width='50'/>
              <h3 className="right__title">Phillip Mullins</h3>
            </div>
          </div>
        </div>
        <div className="videos">
          <h2 className="choose__title">Margaret Phelps videos</h2>
          <div className="videos__render">
          {render &&
            render.map((renders) => (
                <div key={renders.id}>
                    <Link to={"/render/" + renders.id}>
                <img className="videos__img" src={renders.url} alt="" />
              </Link>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Show;
