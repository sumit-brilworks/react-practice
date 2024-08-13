import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import { useEffect, useState } from "react";

function App() {
  console.log("component re-rendering...");
  // Here in useState the non-primitives causes component re-rendering
  const [some, setSome] = useState({ name: "sumit", hasPancard: false });
  const handleClick = (e) => {
    console.log("button clicks");
    setSome({ name: "sumit", hasPancard: false });
  };

  // useEffect lifecycle mounting and unmounting
  useEffect(() => {
    console.log("UseEffect is working and the component is mounted");
    return () => {
      console.log("unmounting is happening");
    };
  }, []);

  const [query, setQuery] = useState("");

  return (
    <>
      <button onClick={handleClick}>
        {some.name + " " + some.hasPancard} - Click me
      </button>
      <div className="min-h-screen bg-neutral-700 text-white font-serif">
        <div>
          <SearchBar setQuery={setQuery} query={query} />
        </div>
        <div>
          <CountriesList query={query} />
        </div>
      </div>
    </>
  );
}

export default App;
