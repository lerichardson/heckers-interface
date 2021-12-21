import { Card } from "./components/card.js";
import "./styles/links.css";
import { GitHub, Twitter, Youtube } from 'react-feather';

function App() {
  return (
    <div className="App">
      <div className="card-holder">
        <Card />
      </div>
      <div className="App-links">
        <div className="gh">
          <a href="https://github.com/lerichardson/heckers-interface" className="link">
            <GitHub size={24} />
          </a>
        </div>
        <div className="twttr">
          <a href="https://twitter.com/Litbelb_" className="link">
            <Twitter size={24} />
          </a>
        </div>
        <div className="yt">
          <a href="https://www.youtube.com/c/Beluga1" className="link">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
