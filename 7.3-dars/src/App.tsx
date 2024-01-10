import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/planets");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>The Planets:</h1>
      {data.map((planet) => (
        <div className="planets-wrapper">
          <div className="planet-img">
            <img
              src={planet.images.planet}
              alt={`There is a ${planet.name}'s img`}
            />
          </div>
          <div className="planet-wrapper">
            <h2>{planet.name}</h2>
            <p>{planet.overview.content}</p>
            <p style={{gap:50}}>Source on:  
                <a style={{ color: "aqua" }} href={planet.overview.source} target={"_blank"}>
                  Wikipedia 
              </a>
            </p>
          </div>
          <div className="foter">
            <button>
              <span className="foter-span">ROTATION TIME</span>
              {planet.rotation}
            </button>
            <button>
              <span className="foter-span">REVOLUTION TIME</span>
              {planet.revolution}
            </button>
            <button>
              <span className="foter-span">Radius</span> {planet.radius}
            </button>
            <button>
              <span className="foter-span">AVERAGE TEMP.</span>
              {planet.temperature}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
