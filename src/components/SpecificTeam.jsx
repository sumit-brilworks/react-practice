import React from "react";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";

function SpecificTeam() {
  const element = useLoaderData();
  console.log(element);
  if (!element) return <div>Loading...</div>;
  return (
    <CountryCard
      key={element.id}
      id={element.id}
      countryName={element.slug}
      capital={element.slug}
      imageUrl={element.image}
      population={element.slug}
      region={element.slug}
    />
  );
}

export default SpecificTeam;
