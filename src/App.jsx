import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Pokemon from "./components/poke-card";
import StudenPost from "./components/post";
import Formxdd from "./components/form";
import axios from "axios";

function App() {
  const pokeonURL = "https://pokeapi.co/api/v2/pokemon/snorlax";
  const backendURL = "https://memory-backend-forjsd11.onrender.com/api/users";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [view, setView] = useState(true);
  const [url, setUrl] = useState(pokeonURL);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);

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
    <div className=" w-screen flex flex-col justify-center items-center text-center min-h-dvh bg-orange-400 gap-12">
      <button className="font-bold rounded-4xl bg-amber-50 w-24" onClick={handleSwitch}>
        Switch
      </button>
      {view ? (
        <>
          {loading && <div className="text-4xl font-bold animate-bounce text-white">Loading...</div>}
          {data && <Pokemon data={data} />}
        </>
      ) : (
        <div className="flex flex-col  gap-12">
          <Formxdd onUserCreated={fetchData} />
          <div className="grid grid-cols-4 gap-4">{data && Array.isArray(data) && data.map((e) => <StudenPost key={e.id} {...e} onDelete={fetchData} />)}</div>
        </div>
      )}
    </div>
  );
}
export default App;
