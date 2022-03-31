import portfolio from "./portfolio.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="home">
        Home
        <br />
        <br />
        Search
        <br />
        <br />
        Your Library
        <br />
        <br />
        Create Playlist
        <br />
        Liked Songs
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={portfolio} alt="profile-img" width="350" />
      </div>
      <div className="hello">
        <article>Software Engineer</article>
        <br />
        <br />
        <br />
        <br />
        Good Evening
        <br />
        <br />
        <br />
        <br />
        <article>Education</article>
        <article>Portfolio</article>
      </div>
      <footer className="footer">Taylor Williams</footer>
    </div>
  );
}

export default App;
