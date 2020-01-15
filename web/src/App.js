import React, { useEffect, useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

export default function App() {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let { longitude, latitude } = position.coords;
        setLongitude(longitude);
        setLatitude(latitude);
      },
      error => {
        console.log(error);
      },
      { timeout: 10000 }
    );
  });

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologys</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                onChange={e => setLatitude(e.target.value)}
                value={latitude}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                onChange={e => setLongitude(e.target.value)}
                value={longitude}
                required
              />
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32438220?s=460&v=4"
                alt="Gabriel Roque"
              />
              <div className="user-info">
                <strong>Gabriel Roque</strong>
                <span>React JS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Software Developer medium.com/@gabriel.roque
              gabrielroquems@hotmail.com
            </p>
            <a href="https://github.com/gabriel-roque">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/32438220?s=460&v=4"
                alt="Gabriel Roque"
              />
              <div className="user-info">
                <strong>Gabriel Roque</strong>
                <span>React JS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Software Developer medium.com/@gabriel.roque
              gabrielroquems@hotmail.com
            </p>
            <a href="https://github.com/gabriel-roque">Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
