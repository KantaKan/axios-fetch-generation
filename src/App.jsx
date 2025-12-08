import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Pokemon from "./components/poke-card";
import StudenPost from "./components/post";
import Formxdd from "./components/form";

function App() {
  const pokeonURL = "https://pokeapi.co/api/v2/pokemon/snorlax";
  const backendURL = "http://localhost:3000/api/users";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [view, setView] = useState(true);
  const [url, setUrl] = useState(pokeonURL);

  const fetchData = async () => {
    //putsomecode to thiss
  };

  const handleSwitch = () => {
    setView(!view);

    if (view) {
      setUrl(backendURL);
    } else {
      setUrl(pokeonURL);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-orange-400 gap-12">
      <button className="font-bold rounded-4xl bg-amber-50 w-24" onClick={handleSwitch}>
        Switch
      </button>
      {view ? (
        <>
          {loading && <div className="text-4xl font-bold animate-bounce text-white">Loading...</div>}
          {data && <Pokemon data={data} />}
        </>
      ) : (
        <div className="flex flex-col w-auto gap-12">
          <Formxdd onUserCreated={fetchData} />
          <div className="grid grid-cols-4 gap-4">{data && Array.isArray(data) && data.map((e) => <StudenPost key={e.id} {...e} onDelete={fetchData} />)}</div>
        </div>
      )}
    </div>
  );
}
export default App;
