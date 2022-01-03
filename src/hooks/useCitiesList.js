import { useEffect, useState } from "react";
// hook for get and set array of the city list from\to localStorage
export const useCitiesList = () => {
  const [citiesList, setCitiesList] = useState(
    JSON.parse(localStorage.getItem("citiesList")) || []
  );
  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  return [citiesList, setCitiesList];
}