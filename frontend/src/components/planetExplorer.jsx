import { useState } from "react"
import FactsComponent from "./factsComponent"
import SomeContext from "../SomeContext"
import "../planetExplorer.css"

const base = import.meta.env.BASE_URL

const planets = [
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestial Planet",
    au: "0.39 AU",
    color: "#b5b5b5",
    image: `https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg`,
    desc: "The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.",
    panelImg:
      "https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&ssl=1",
  },
  {
    id: "venus",
    name: "Venus",
    type: " Terrestial Planet",
    au: "0.72 AU",
    color: "#e8c870",
    image: `${base}images/venus_texture.jpg`,
    desc: "Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.",
    panelImg:
      "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg",
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestial Planet",
    au: "1 AU",
    color: "#4b9cd3",
    image: `https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg`,
    desc: "Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.",
    panelImg:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    id: "mars",
    name: "Mars",
    type: " Terrestial Planet",
    au: "1.52 AU",
    color: "#c1440e",
    image: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg`,
    desc: 'Fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, often described as the "Red Planet".',
    panelImg:
      "https://1.bp.blogspot.com/-ou7Je3OVg6U/WYtxDqjNp_I/AAAAAAAACSQ/fsopS5VtFg4bmlv8hQNfiRYfJqTygCotQCLcBGAs/s2048/Martian%2Blandscape%2Bby%2BAmante%2BLombardi.jpg",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    au: "5.2 AU",
    color: "#c88b3a",
    image: `${base}images/jupiter_texture.jpg`,
    desc: "Jupiter is the largest planet in the solar system. Fittingly, it was named after the king of the gods in Roman mythology.",
    panelImg:
      "http://hanaleikauaivacation.com/wp-content/uploads/parser/jupiter-landscape-1.jpg",
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    au: "9.5 AU",
    color: "#e4d191",
    image: `https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg`,
    desc: "Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans.",
    panelImg: "http://ak0.picdn.net/shutterstock/videos/4049260/thumb/1.jpg",
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    au: "19.2 AU",
    color: "#7de8e8",
    image: `https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png`,
    desc: "The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.",
    panelImg:
      "http://www.cosmosup.com/wp-content/uploads/2016/02/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg",
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    au: "30 AU",
    color: "#5b7fde",
    image: `https://www.solarsystemscope.com/images/textures/full/2k_neptune.jpg`,
    desc: "Neptune is the eighth planet from the sun. It was the first planet to get its existence predicted by mathematical calculations before it was actually seen through a telescope.",
    panelImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Dd14tbXAzh1iz-EJl9tulRwH7Bb-SxX6sXpKFDbqb-NKwpE",
  },
  {
    id: "pluto",
    name: "Pluto",
    type: "Dwarf Planet",
    au: "39.5 AU",
    color: "#c5a880",
    image: `https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png`,
    desc: "Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system.",
    panelImg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/asd.jpeg",
  },
]

export default function PlanetExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [panelOpen, setPanelOpen] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const activePlanet = planets[activeIndex]
  const behindPlanets = planets.slice(activeIndex + 1, activeIndex + 4)

  function selectPlanet(index) {
    setTransitioning(true)
    setActiveIndex(index)
    setPanelOpen(false)
    setMenuOpen(false)

    setTimeout(() => {
      setTransitioning(false)
    }, 1000)
  }

  return (
    <>
      {/* Hamburger button (visible on small screens) */}
      <button
        className={`pe-hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle planet menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Left sidebar */}
      <nav className={`pe-menu ${menuOpen ? "open" : ""}`}>
        {planets.map((planet, i) => (
          <button
            key={planet.id}
            className={`pe-menu-item ${i === activeIndex ? "active" : ""}`}
            onClick={() => selectPlanet(i)}
          >
            <span
              className="pe-pip"
              style={{ background: planet.color }}
            ></span>
            <span className="pe-menu-name">{planet.name}</span>
            <span className="pe-menu-au">{planet.au}</span>
          </button>
        ))}
      </nav>
      {menuOpen && (
        <div className="pe-menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* Main stage */}
      <div className="pe-stage">
        {behindPlanets.map((planet, i) => (
          <div
            key={planet.id}
            className={`pe-behind pe-behind-${i + 1} ${transitioning ? "fade-out" : ""}`}
            onClick={() => selectPlanet(activeIndex + i + 1)}
            style={{ backgroundImage: `url(${planet.image})` }}
          />
        ))}
        <div className="pe-active-planet-wrapper" data-planet={activePlanet.id}>
          <div
            className={`pe-active-planet ${transitioning ? "fade-out" : "fade-in"}`}
            style={{ backgroundImage: `url(${activePlanet.image})` }}
          >
            <div className="pe-description">
              <p className="pe-type">{activePlanet.type.toUpperCase()}</p>
              <h1 className="pe-name">{activePlanet.name.toUpperCase()}</h1>
              <p className="pe-desc">{activePlanet.desc}</p>
              <button
                className="pe-read-more"
                onClick={() => setPanelOpen(true)}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in panel */}
      <div className={`pe-panel ${panelOpen ? "open" : ""}`}>
        <button className="pe-close" onClick={() => setPanelOpen(false)}>
          ✕
        </button>
        <h1>{activePlanet.name}</h1>
        {/* <img src={activePlanet.panelImg} alt={activePlanet.name} /> */}
        <SomeContext.Provider value={activePlanet.name}>
          <FactsComponent />
        </SomeContext.Provider>
      </div>
      {panelOpen && (
        <div className="pe-backdrop" onClick={() => setPanelOpen(false)} />
      )}
    </>
  )
}
