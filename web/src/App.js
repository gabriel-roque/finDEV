import React, { useEffect, useState } from "react";
import findevAPI from "./services/api";

import DevFrom from "./components/DevForm";
import DevItem from "./components/DevItem";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await findevAPI.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await findevAPI.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevFrom onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}
