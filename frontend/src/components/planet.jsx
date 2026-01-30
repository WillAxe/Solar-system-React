import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../planets.css";
import styled from "styled-components";

const Note = styled.p`
  color: #e2e7e7;
  font-size: 17px;
  font-weight: 500;
`;
function Planet() {
  const { planetname } = useParams();
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    if (!planetname) return;
    fetch(`https://memoar.nu/api/planets/${planetname}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.planet)
        setPlanet(result.planet);
      });
  }, [planetname]);
  return (
    <>
      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th>Planet</th>
                <th>Type of Planet</th>
                <th>Distance from the sun</th>
                <th>Mass</th>
                <th>Rings</th>
                <th>Number of moons</th>
              </tr>
            </thead>
            <tbody>
              {planet !== null && (
                <tr className="planet-row">
                  <td data-label="Planet">{`${planet.planetname}`}</td>
                  <td data-label="Type of Planet">{`${planet.planettype}`}</td>
                  <td data-label="Distance from the sun">{`${planet.distancefromsun} AU`}</td>
                  <td data-label="Mass">{`${planet.mass} kg`}</td>
                  <td data-label="Rings">{`${planet.hasrings === 0 ? "no" : "yes"}`}</td>
                  <td data-label="Number of moons">{`${planet.moons}`}</td>
                </tr>
              )}
            </tbody>
          </table>
          <Note>Note: 1 AU is approximately 149.6 million km</Note>
        </section>
      </main>
    </>
  );
}
export default Planet;
