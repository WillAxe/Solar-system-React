import "../homepage.css"
function Home() {
  return (
    <>
      <div className="home-background">
        <main className="main">
          <h1>Our solar system</h1>
          <p className="p-home">
            Our solar system is a vast and fascinating part of the universe,
            centered around the Sun — a massive star that provides the light and
            energy necessary for life on Earth. Orbiting the Sun are eight
            unique planets, each with its own characteristics, moons, and
            mysteries.
          </p>

          <p className="p-home">
            The four planets closest to the Sun — <strong>Mercury</strong>,{" "}
            <strong>Venus</strong>, <strong>Earth</strong>, and{" "}
            <strong>Mars</strong> — are known as the{" "}
            <em>terrestrial planets</em>. These rocky worlds have solid surfaces
            and are relatively small compared to the outer planets.
          </p>

          <p className="p-home">
            Beyond Mars, we find the <em>gas giants</em>{" "}
            <strong>Jupiter</strong> and <strong>Saturn</strong>, enormous
            planets made mostly of hydrogen and helium. Farther out lie{" "}
            <strong>Uranus</strong> and <strong>Neptune</strong>, often referred
            to as <em>ice giants</em> due to their frigid temperatures and icy
            compositions.
          </p>

          <p className="p-home">
            In addition to planets, the solar system contains moons, asteroids,
            comets, and dwarf planets like Pluto — all orbiting within an
            immense area shaped by the Sun's gravity. Exploring our solar system
            helps us understand not only our own world, but also the wider
            universe we live in.
          </p>
        </main>
      </div>
    </>
  )
}
export default Home
