import "../moons.css"
import { useEffect, useState } from "react"
import LinkTo from "./linkTo"
function Moons() {
  const [moon, setMoon] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/moons")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.moons)
        setMoon(result.moons)
      })
  }, [])
  return (
    <>
      <main className="moons-container">
        <h1 className="moons-title">Moons of the Solar system</h1>
        <div className="moons-grid">
          {moon.map((moons) => (
            <section className="moon-section" key={moons.MoonName}>
              <h2>{`${moons.MoonName}`}</h2>
              <h3>{`${moons.PlanetName}`}</h3>
              <LinkTo body={moons} bodies="moons"></LinkTo>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
export default Moons
