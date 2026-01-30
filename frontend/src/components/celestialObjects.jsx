import "../celestialObject.css";
import { useEffect, useState } from "react";

function CelestialObjects() {
  const [object, setObject] = useState([]);
  const [visibilty, setVisibility] = useState({});
  useEffect(() => {
    fetch("https://memoar.nu/api/celestialobjects")
      .then((response) => response.json())
      .then((result) => {
        console.log(result.objects);
        setObject(result.objects);
      });
  }, []);

  //a function that handles the click and toggles the visibility of the text
  function toggleVisibilty(objectid) {
    setVisibility((prev) => ({
      //The prev gets the previous state that the visibilty had
      ...prev,
      [objectid]: !prev[objectid],
    }));
  }

  //a function that handles the hover and shows the visibility of the text
  function handleMouseEnter(objectid) {
    setVisibility((prev) => ({
      ...prev,
      [objectid]: true,
    }));
  }

  //a function that handles the mouse leave and hides the visibility of the text
  function handleMouseLeave(objectid) {
    setVisibility((prev) => ({
      ...prev,
      [objectid]: false,
    }));
  }

  return (
    <>
      <main className="object-container">
        {object.map((celestialObjects) => (
          <div className="object-wrapper" key={celestialObjects.objectid}>
            <section
              className="object-section"
              onMouseEnter={() => handleMouseEnter(celestialObjects.objectid)}
              onMouseLeave={() => handleMouseLeave(celestialObjects.objectid)}
            >
              <h2
                className="titles"
                onClick={() => toggleVisibilty(celestialObjects.objectid)}
              >
                {`${celestialObjects.objectname}`}
              </h2>
            </section>

            {/* checks if the visibility of the ID is true render the p-element */}
            {visibilty[celestialObjects.objectid] && (
              <p className="object-type">{`Type of object: ${celestialObjects.objecttype}`}</p>
            )}
          </div>
        ))}
      </main>
    </>
  );
}
export default CelestialObjects;
