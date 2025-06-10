import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FactsComponent from "./factsComponent"
import SomeContext from "../SomeContext"
function Moon() {
  const [moon, setMoon] = useState(null)
  const { moonname } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/api/moons/${moonname}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.moon[0])
        setMoon(result.moon[0])
      })
  }, [moonname])
  return (
    <>
      {moon !== null && (
        <main>
          <h1>{`${moon.MoonName}`}</h1>
          <SomeContext.Provider value={moon.MoonName}>
            <FactsComponent />
          </SomeContext.Provider>
        </main>
      )}
    </>
  )
}
export default Moon
