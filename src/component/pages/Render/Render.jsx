import React from "react";
import "./Render.css";
import { useParams } from "react-router-dom";

function Render() {
  const [render, setRender] = React.useState();
  const [renderAside, setRenderAside] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { info_id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + info_id
      );
      const data = await res.json();

      if (data) {
        setRender(data);
        setLoading(false);
      }
      console.log(data);
    })();
  }, []);
  // setREnderaside
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();

      if (data) {
        setRenderAside(data.slice(0, 20));
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="main">
      <ul className="home__list">
        {render && (
          <>
            <li key={render.id}>
              <img className="render__img" src={render.url} alt="img" />
              <h2 className="render__title">{render.title}</h2>
              <hr className="line"/>
              <div className="render__info">
                <img className="render__span__img" src={render.url} alt="img" />
                <div>
                  <h2 className="render_descrip">Info title</h2>
                  <p className="render__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur perspiciatis molestiae magnam dolores expedita,
                    quas qui, quasi sequi labore et non, sed voluptatum
                    accusamus officiis. Dolor laborum sed nobis ipsa ea maiores
                    culpa suscipit error temporibus ab alias debitis molestiae
                    labore dignissimos voluptatibus optio, necessitatibus
                    consectetur amet libero repudiandae corporis eum. Dolore
                    cumque enim culpa voluptas error fuga dolores nostrum
                    dolorem? Earum cumque magni doloremque dolorem incidunt
                    fugiat id rerum deleniti inventore laudantium quae ratione
                    aspernatur voluptatibus ex, ab magnam quos. Fugit quia non
                    repudiandae pariatur, officia saepe nesciunt perferendis
                    expedita? Quod laboriosam nulla fugit quam iure rerum
                    doloribus esse.
                  </p>
                </div>
              </div>
            </li>
          </>
        )}
      </ul>

      <ul className="aside__list">
        {renderAside &&
          renderAside.map((aside) => (
            <li className="aside__item" key={aside.id}>
              <img className="aside__img" src={aside.url} alt="img" />
              <p className="aside__text">Lorem ipsum dolor</p>
            </li>
          ))}
      </ul>

      {loading && <h1>Loading</h1>}
    </main>
  );
}
export default Render;
