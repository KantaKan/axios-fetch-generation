import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Pokemon from "./component/poke-card";
import StudenPost from "./component/post";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [view, setView] = useState(true);

  let pokeonURL = "https://pokeapi.co/api/v2/pokemon/ditto";
  let backendURL = "http://localhost:3000/api/users";

  const fetchData = async () => {
    setLoading(true);
    try {
      const poke = await fetch(backendURL);
      const poked = await poke.json();
      setData(poked);
      console.log(poked);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-orange-400 gap-12">
      <button className="font-bold rounded-4xl bg-amber-50 w-24" onClick={() => setView(!view)}>
        Switch
      </button>
      {view ? (
        <>
          {loading && <div className="text-4xl font-bold animate-bounce text-white">Loading...</div>}
          {data && <Pokemon data={data} />}
        </>
      ) : (
        <div className="grid grid-cols-3 gap-24 w-auto ">
          {data.map((e, index) => (
            <StudenPost key={index} name={e.name} description={e.description} profilePicURL={e.profilePicURL} />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
