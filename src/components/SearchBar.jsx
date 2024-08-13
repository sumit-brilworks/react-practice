function SearchBar({ setQuery, query }) {
  return (
    <div className="">
      <div className="h-40 flex justify-center items-center gap-4">
        <input
          className="h-10 w-[60%] text-black outline-none p-2 rounded-md"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search countries here ..."
        />
        {/* <button className="bg-sky-500 rounded-md p-2 h-10 hover:bg-purple-500">
          Search
        </button> */}
      </div>
    </div>
  );
}

export default SearchBar;
