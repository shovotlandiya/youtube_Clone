import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Dollie from "../../../Assets/img/Dollie.svg";
import Limon from "../../../Assets/img/limon.svg";

function Home() {
  const [datas, setDatas] = React.useState();
  const [idNumberSecond, setIdNumberSecond] = React.useState();
  const [idNumberThree, setIdNumberThree] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      const data = await res.json();

      if (data) {
        setDatas(data.slice(0, 20));
        setIdNumberSecond(data.slice(20, 40));
        setIdNumberThree(data.slice(40, 60));
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {/* Id=1 */}
      <div>
        <div className="home">
          <img
            className="dollie__img"
            src={Dollie}
            alt="Dollie"
            width="50"
            height="50"
          />
          <h1 className="home__heading">Dollie Blair</h1>
        </div>
        <ul className="home__list">
          {datas &&
            datas.map((info) => (
              <Link
                to={"/render/" + info.id}
                className="home__item"
                key={info.id}
              >
                <img className="home__img" src={info.thumbnailUrl} alt="img" />
                <h3 className="home__title">{info.title}</h3>
              </Link>
            ))}
        </ul>
      </div>
      {loading && <h1>Loading</h1>}

      {/* Id=2 */}
     <div>
     <div className="home">
     <h1 className="home__heading">Recommend</h1>
     </div>
     <ul className="idNumer__list">
        {idNumberSecond &&
          idNumberSecond.map((info) => (
            <Link
              to={"/render/" + info.id}
              className="idNumer__item"
              key={info.id}
            >
              <img
                className="idNumber__img"
                src={info.thumbnailUrl}
                alt="img"
              />
              <h3 className="idNumber__title">{info.title}</h3>
            </Link>
          ))}
      </ul>
     </div>

      {/* id3 */}
     <div>
     <div className="home">
          <img
            className="dollie__img"
            src={Limon}
            alt="Dollie"
            width="50"
            height="50"
          />
          <h1 className="home__heading">Food & Drink</h1>
        </div>
      <ul className="idNumer__three__list">
        
        {idNumberThree &&
          idNumberThree.map((info) => (
            <Link
              to={"/render/" + info.id}
              className="idNumer__three__item"
              key={info.id}
            >
              <img
                className="idNumber__three__img"
                src={info.thumbnailUrl}
                alt="img"
              />
              <h3 className="idNumber__three__title">{info.title}</h3>
            </Link>
          ))}
      </ul>
     </div>
    </>
  );
}

export default Home;
