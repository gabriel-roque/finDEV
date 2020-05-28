import React, { useState, useEffect } from "react";

import "./styles.css";

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
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
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    const data = { github_username, techs, longitude, latitude };

    setGithubUsername("");
    setTechs("");
    onSubmit(data);

    return await data;
  }

  return (
    <form onSubmit={handleAddDev}>
      <div className="input-block">
        <label htmlFor="github_username">Github Username</label>
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Technologys</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
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
  );
}
