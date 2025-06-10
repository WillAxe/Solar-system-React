import "../celestialObject.css"
import { useEffect, useState } from "react"

function CelestialObjects() {
  const [object, setObject] = useState([])
  const [visibilty, setVisibility] = useState({})
  useEffect(() => {
    fetch("http://localhost:3000/api/celestialobjects")
      .then((response) => response.json())
      .then((result) => {
        console.log(result.celestialObjects)
        setObject(result.celestialObjects)
      })
  }, [])

  //a function that handles the click and toggles the texts visibility
  function toggleVisibilty(ObjectID) {
    setVisibility((prev) => ({
      //The prev gets the previous state that the visibilty had
      ...prev,
      [ObjectID]: !prev[ObjectID],
    }))
  }

  return (
    <>
      <main className="object-container">
        {object.map((celestialObjects) => (
          <section className="object-section" key={celestialObjects.ObjectID}>
            <h2
              className="titles"
              onClick={() => toggleVisibilty(celestialObjects.ObjectID)}
            >
              {`${celestialObjects.ObjectName}`}
            </h2>

            {visibilty[celestialObjects.ObjectID] && (
              <p>{`Type of object: ${celestialObjects.ObjectType}`}</p>
            )}
          </section>
        ))}
      </main>
    </>
  )
}
export default CelestialObjects
