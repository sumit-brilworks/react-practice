import React from "react";

function CountryCard({ imageUrl, countryName, population, region, capital }) {
  return (
    <div
      key={countryName}
      className="p-4 bg-neutral-600 flex flex-col gap-3 items-center rounded m-2"
    >
      <div>
        <img className="max-h-32" src={imageUrl} alt="countryImg" />
      </div>
      <div className="h-[50%]">
        <div className="text-2xl font-semibold ">{countryName}</div>
        <div>Population : {population}</div>
        <div>Region : {region}</div>
        <div>Capital : {capital}</div>
      </div>
    </div>
  );
}

export default CountryCard;
