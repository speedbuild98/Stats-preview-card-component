import "./App.css";
import headerDesktop from "./images/image-header-desktop.jpg"
import headerMobile from "./images/image-header-mobile.jpg"
import Stats from "./Stats.js"

function App() {
  return (
    <div className="App">
      <main>
        <img className="headerImg" src={headerMobile} alt="headerMobile-img" />
        <img className="headerImg2" src={headerDesktop} alt="headerDesktop-img" />
        <div className="contenedor">
          <h1 className="titulo">
            Get <span className="insights">insights</span> that help your
            business grow.
          </h1>
          <p className="descripcion">
            Discover the benefits of data
            <br />
            analytics and make better decisions
            <br />
            regarding revenue, customer
            <br />
            experience, and overall efficiency.
          </p>
          <p className="descripcion2">
            Discover the benefits of data analytics and make<br />better decisions
            regarding revenue, customer<br />experience, and overall efficiency.
          </p>
          <div className="stats">
            <Stats stats="10k+" statsHead="companies" />
            <Stats stats="314" statsHead="templates" />
            <Stats stats="12M+" statsHead="queries" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
