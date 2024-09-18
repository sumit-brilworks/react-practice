import { useState } from "react";
import countriesData from "./countriesData.js";
import CountryCard from "./CountryCard.jsx";

function CountriesList({ query }) {
  return (
    <div className="grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 ">
      {countriesData
        .filter((elem) => elem.name.common.toLowerCase().match(query))
        .map((element, index) => {
          return (
            <CountryCard
              key={element.id}
              id={element.id}
              countryName={element.name.common}
              capital={element.capital?.[0]}
              imageUrl={element.flags.svg}
              population={element.population}
              region={element.name.common}
            />
          );
        })}
    </div>
  );
}

export default CountriesList;
