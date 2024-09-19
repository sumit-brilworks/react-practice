import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  console.log("component re-rendering...");
  // Here in useState the non-primitives causes component re-rendering
  const [some, setSome] = useState({ name: "sumit", hasPancard: false });
  const [inputVal, setInputVal] = useState();

  const [query, setQuery] = useSearchParams();
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
  console.log(query);
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery({ query: inputVal });
  };
  useEffect(() => {
    setQuery({ query: "" });
  }, []);
  return (
    <>
      <button onClick={handleClick}>
        {some.name + " " + some.hasPancard} - Click me
      </button>
      <div className="min-h-screen bg-neutral-700 text-white font-serif">
        <form onSubmit={handleSearch}>
          <input
            className="text-black p-2 outline-none mx-auto"
            type="text"
            onChange={(e) => setInputVal(e.target.value)}
          />
        </form>
        <div>
          <CountriesList query={query.get("query")} />
        </div>
      </div>
    </>
  );
}

export default App;
