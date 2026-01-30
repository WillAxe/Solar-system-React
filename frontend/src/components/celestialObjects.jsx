import "../celestialObject.css"
import { useEffect, useState } from "react"

function CelestialObjects() {
  const [object, setObject] = useState([])
  const [visibilty, setVisibility] = useState({})
  useEffect(() => {
    fetch("https://memoar.nu/api/celestialobjects")
      .then((response) => response.json())
      .then((result) => {
        console.log(result.celestialobjects)
        setObject(result.celestialobjects)
      })
  }, [])

  //a function that handles the click and toggles the visibility of the text
  function toggleVisibilty(objectid) {
    setVisibility((prev) => ({
      //The prev gets the previous state that the visibilty had
      ...prev,
      [objectid]: !prev[objectid],
    }))
  }

  return (
    <>
      <main className="object-container">
        {object.map((celestialObjects) => (
          <section className="object-section" key={celestialObjects.objectid}>
            <h2
              className="titles"
              onClick={() => toggleVisibilty(celestialObjects.objectid)}
            >
              {`${celestialObjects.objectname}`}
            </h2>

            {/* checks if the visibility of the ID is true render the p-element */}
            {visibilty[celestialObjects.objectid] && (
              <p>{`Type of object: ${celestialObjects.objecttype}`}</p>
            )}
          </section>
        ))}
      </main>
    </>
  )
}
export default CelestialObjects
