import { useContext } from "react"
import SomeContext from "../SomeContext"
function FactsComponent() {
  const someValue = useContext(SomeContext)
  return (
    <>
      <p className="facts-paragraph">{factText[someValue]}</p>
    </>
  )
}
export default FactsComponent
const factText = {
  Moon: "The Moon is Earth's only natural satellite. It is about 3,474 kilometers in diameter and orbits Earth at an average distance of 384,400 kilometers. The Moon has no atmosphere, which means there is no weather or sound. It affects Earth's tides through its gravitational pull. The same side of the Moon always faces Earth, a phenomenon called tidal locking. Humans first landed on the Moon in 1969 during NASA's Apollo 11 mission.",

  Io: "Io is one of Jupiter's largest moons and the most volcanically active body in the Solar System. It has over 400 active volcanoes, some of which erupt with lava fountains hundreds of kilometers high. Io is slightly larger than Earth’s Moon and has a surface covered with sulfur and sulfur dioxide, giving it a colorful, blotchy appearance. Its intense volcanic activity is caused by tidal heating, due to gravitational forces from Jupiter and nearby moons Europa and Ganymede. Io was discovered by Galileo Galilei in 1610.",

  Europa:
    "Europa is one of Jupiter’s largest moons and is slightly smaller than Earth's Moon. It has a smooth, icy surface with very few craters, suggesting it is geologically young. Beneath the ice, scientists believe there is a vast subsurface ocean that may contain more than twice the water of all Earth's oceans combined. This makes Europa a key target in the search for extraterrestrial life. The moon has a thin atmosphere made mostly of oxygen. Europa was discovered by Galileo Galilei in 1610.",

  Ganymede:
    "Ganymede is the largest moon in the Solar System—even bigger than the planet Mercury. It is one of Jupiter’s Galilean moons and was discovered by Galileo Galilei in 1610. Ganymede has a mix of rocky and icy terrain, with both old, cratered regions and newer, grooved areas that suggest tectonic activity. It has a thin atmosphere and is the only moon known to have its own magnetic field. Scientists believe Ganymede may also have a subsurface ocean beneath its icy crust, making it an interesting object for future exploration.",

  Callisto:
    "Callisto is the second-largest moon of Jupiter and the third-largest moon in the Solar System. It was discovered by Galileo Galilei in 1610. Callisto has an ancient, heavily cratered surface, making it one of the oldest landscapes in the Solar System. Unlike Europa or Ganymede, it shows little signs of geological activity. However, scientists believe Callisto may still have a subsurface ocean. The moon has a very thin atmosphere made mostly of carbon dioxide. Its distance from Jupiter means it experiences less radiation, which could make it a potential site for future human exploration.",

  Amalthea:
    "Amalthea is a small, irregularly shaped moon of Jupiter and was discovered in 1892 by Edward Emerson Barnard. It is the largest of Jupiter’s inner moons, but still much smaller than the Galilean moons. Amalthea is only about 250 kilometers long and has a reddish color, possibly due to sulfur from Io or other materials. Its surface is heavily cratered and mountainous. Despite its small size, Amalthea contributes dust to one of Jupiter’s faint rings. It orbits very close to Jupiter and experiences strong radiation from the planet's magnetic field.",

  Lysithea:
    "Lysithea is a small, irregular moon of Jupiter. It was discovered in 1938 by astronomer Seth Barnes Nicholson. Lysithea is part of the Himalia group, a cluster of moons that share similar orbits and are thought to be fragments of a larger object that broke apart. It is about 36 kilometers in diameter and orbits Jupiter at a great distance, taking roughly 259 Earth days to complete one orbit. Like other irregular moons, Lysithea has a dark surface and an eccentric, inclined orbit, suggesting it was likely captured by Jupiter’s gravity rather than forming in place.",

  Phobos:
    "Phobos is the larger and closer of Mars’ two moons. It was discovered in 1877 by astronomer Asaph Hall. Phobos is very small—about 22 kilometers across—and has an irregular shape. It orbits Mars extremely closely, completing a full orbit in just about 7.6 hours, which means it rises in the west and sets in the east multiple times per day. Phobos is heavily cratered, with a large impact crater named Stickney being its most prominent feature. Due to its low orbit, Phobos is gradually spiraling toward Mars and is expected to either crash into the planet or break apart in about 50 million years.",

  Deimos:
    "Deimos is the smaller and more distant of Mars’ two moons. It was discovered in 1877 by astronomer Asaph Hall, just a few days after he discovered Phobos. Deimos is only about 12 kilometers across and has a smooth, dusty surface with fewer craters compared to Phobos. Its small size and irregular shape make it resemble an asteroid, and it is believed to be a captured object from the asteroid belt. Deimos orbits Mars every 30.3 hours and, unlike Phobos, is slowly drifting away from the planet.",

  Triton:
    "Triton is the largest moon of Neptune and one of the most fascinating in the Solar System. It was discovered in 1846 by British astronomer William Lassell, just 17 days after Neptune itself was discovered. Triton is unique because it orbits Neptune in a retrograde direction—opposite to the planet’s rotation—suggesting it was likely captured from the Kuiper Belt. It has a very cold surface with nitrogen ice and geysers that erupt liquid nitrogen, making it one of the few geologically active moons in the outer Solar System. Triton may also have a subsurface ocean and is considered a potential candidate for hosting microbial life.",

  Nereid:
    "Nereid is the third-largest moon of Neptune and was discovered in 1949 by astronomer Gerard Kuiper. It is known for its highly eccentric orbit, one of the most elliptical of any moon in the Solar System. Nereid’s distance from Neptune varies greatly during its 360-day orbit. The moon is about 340 kilometers in diameter and has an irregular shape. Not much is known about its surface, but it likely consists of rock and ice. Nereid’s unusual orbit suggests it may have been disturbed by the gravitational influence of Triton or captured from another region of the Solar System.",

  Hippocamp:
    "Hippocamp is the smallest known moon of Neptune. It was discovered in 2013 using images from the Hubble Space Telescope. Hippocamp is only about 34 kilometers in diameter and orbits very close to Neptune, just inside the orbit of the larger moon Proteus. Scientists believe Hippocamp may have formed from debris ejected by an impact on Proteus long ago. Despite its small size and recent discovery, Hippocamp provides important clues about the history and evolution of Neptune’s moon system.",

  Titan:
    "Titan is Saturn’s largest moon and the second-largest moon in the Solar System, even bigger than the planet Mercury. It has a thick atmosphere mostly made of nitrogen, with clouds and weather patterns including methane rain and lakes of liquid methane and ethane on its surface. Titan’s dense atmosphere and surface liquids make it one of the most Earth-like bodies in the Solar System and a key target in the search for extraterrestrial life. The moon was discovered by Christiaan Huygens in 1655.",

  Enceladus:
    "Enceladus is a small icy moon of Saturn, about 500 kilometers in diameter. It is famous for its bright, reflective surface and active geysers that spew water vapor and ice particles from cracks near its south pole. These plumes suggest a subsurface ocean beneath its icy crust, making Enceladus one of the most promising places to search for signs of life beyond Earth. The moon was discovered by William Herschel in 1789.",

  Mimas:
    "Mimas is a small icy moon of Saturn, about 400 kilometers in diameter. It is best known for its huge impact crater called Herschel, which makes it look a bit like the “Death Star” from Star Wars. Mimas has a heavily cratered surface and is mostly made of ice. Despite its small size, it plays an important role in shaping Saturn’s rings through gravitational interactions. Mimas was discovered by William Herschel in 1789",

  Rhea: "Rhea is the second-largest moon of Saturn, measuring about 1,530 kilometers in diameter. It has a heavily cratered, icy surface with bright streaks caused by ice cliffs and fractures. Rhea is thought to have a rocky core surrounded by an icy mantle. It has a very thin atmosphere made mostly of oxygen and carbon dioxide. Discovered by Giovanni Cassini in 1672, Rhea orbits Saturn at a moderate distance and is an important part of Saturn’s moon system.",

  Tethys:
    "Tethys is a medium-sized icy moon of Saturn, about 1,060 kilometers in diameter. It has a heavily cratered surface and is famous for a huge valley called Ithaca Chasma that stretches over 2,000 kilometers long. Tethys is mostly made of water ice and has a very low density. It was discovered by Giovanni Cassini in 1684 and orbits Saturn at a distance between Mimas and Dione.",

  Hyperion:
    "Hyperion is an irregularly shaped, sponge-like moon of Saturn, about 270 kilometers across. It has a very porous surface covered in deep craters and cavities, giving it a unique, rough texture. Unlike most moons, Hyperion rotates chaotically, meaning its spin is unpredictable. It was discovered in 1848 by William Bond, George Bond, and William Lassell. Hyperion’s unusual shape and rotation make it one of the most fascinating moons in the Solar System.",
}
