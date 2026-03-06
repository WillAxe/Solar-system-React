import { useContext } from "react"
import SomeContext from "../SomeContext"
function FactsComponent() {
  // Gets the moon name from the parent component via useContext
  const someValue = useContext(SomeContext)
  return (
    <>
      <p className="facts-paragraph">{factText[someValue]}</p>
    </>
  )
}
export default FactsComponent
const factText = {
  Mercury: `

          Mercury is the closest planet to the sun. As such, it circles the sun
          faster than all the other planets, which is why Romans named it after
          their swift-footed messenger god.

          The Sumerians also knew of Mercury since at least 5,000 years ago. It
          was often associated with Nabu, the god of writing. Mercury was also
          given separate names for its appearance as both a morning star and as
          an evening star. Greek astronomers knew, however, that the two names
          referred to the same body, and Heraclitus, around 500 B.C., correctly
          thought that both Mercury and Venus orbited the sun, not Earth.
      
       
        <h2>A year on Mercury is just 88 days long.</h2>
     
          One solar day (the time from noon to noon on the planet’s surface) on
          Mercury lasts the equivalent of 176 Earth days while the sidereal day
          (the time for 1 rotation in relation to a fixed point) lasts 59 Earth
          days. Mercury is nearly tidally locked to the Sun and over time this
          has slowed the rotation of the planet to almost match its orbit around
          the Sun. Mercury also has the highest orbital eccentricity of all the
          planets with its distance from the Sun ranging from 46 to 70 million
          km.
       
        <h2>Mercury is the smallest planet in the Solar Systm.</h2>
        
          One of five planets visible with the naked eye a, Mercury is just
          4,879 Kilometres across its equator, compared with 12,742 Kilometres
          for the Earth.
       
        <h2>Mercury is the second densest planet.</h2>
        
          Even though the planet is small, Mercury is very dense. Each cubic
          centimetre has a density of 5.4 grams, with only the Earth having a
          higher density. This is largely due to Mercury being composed mainly
          of heavy metals and rock.
       
        <h2>Mercury has wrinkles.</h2>
       
          As the iron core of the planet cooled and contracted, the surface of
          the planet became wrinkled. Scientist have named these wrinkles,
          Lobate Scarps. These Scarps can be up to a mile high and hundreds of
          miles long.
        `,

  Venus: `

          Venus, the second planet from the sun, is named for the Roman goddess
          of love and beauty. The planet — the only planet named after a female
          — may have been named for the most beautiful deity of her pantheon
          because it shone the brightest of the five planets known to ancient
          astronomers.

          In ancient times, Venus was often thought to be two different stars,
          the evening star and the morning star — that is, the ones that first
          appeared at sunset and sunrise. In Latin, they were respectively known
          as Vesper and Lucifer. In Christian times, Lucifer, or
          "light-bringer," became known as the name of Satan before his fall.
          However, further observations of Venus in the space age show a very
          hellish environment. This makes Venus a very difficult planet to
          observe from up close, because spacecraft do not survive long on its
          surface.
      
      
        <h2>A day on Venus lasts longer than a year.</h2>
      
          It takes 243 Earth days to rotate once on its axis (sidereal day). The
          planet’s orbit around the Sun takes 225 Earth days, compared to the
          Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth
          days.
     
        <h2>Venus rotates in the opposite direction to most other planets.</h2>
      
          This means that Venus is rotating in the opposite direction to the
          Sun, this is also know as a retrograde rotation. A possible reason
          might be a collision in the past with an asteroid or other object that
          caused the planet to alter its rotational path. It also differs from
          most other planets in our solar systm by having no natural satellites.
     
        <h2>Venus is the second brightest object in the night sky.</h2>
         
          Only the Moon is brighter. With a magnitude of between -3.8 to -4.6
          Venus is so bright it can be seen during daytime on a clear day.
      
        <h2>
          Atmospheric pressure on Venus is 92 times greater than the Earth’s.
        </h2>
      
          While its size and mass are similar to Earth, the small asteroids are
          crushed when entering its atmosphere, meaning no small craters lie on
          the surface of the planet. The pressure felt by a human on the surface
          would be equivalent to that experienced deep beneath the sea on Earth.
        `,
  Earth: ` 

          Earth, our home, is the third planet from the sun. It is the only
          planet known to have an atmosphere containing free oxygen, oceans of
          liquid water on its surface, and, of course, life.

          Earth is the fifth largest of the planets in the solar systm — smaller
          than the four gas giants, Jupiter, Saturn, Uranusand Neptune, but
          larger than the three other rocky planets,
         
        <h2>The Earth’s rotation is gradually slowing.</h2>
         
          This deceleration is happening almost imperceptibly, at approximately
          17 milliseconds per hundred years, although the rate at which it
          occurs is not perfectly uniform. This has the effect of lengthening
          our days, but it happens so slowly that it could be as much as 140
          million years before the length of a day will have increased to 25
          hours.
         
        <h2>The Earth was once believed to be the centre of the universe.</h2>
         
          Due to the apparent movements of the Sun and planets in relation to
          their viewpoint, ancient scientists insisted that the Earth remained
          static, whilst other celestial bodies travelled in circular orbits
          around it. Eventually, the view that the Sun was at the centre of the
          universe was postulated by Copernicus, though this is also not the
          case.
         
        <h2>Earth has a powerful magnetic field.</h2>
         
          This phenomenon is caused by the nickel-iron core of the planet,
          coupled with its rapid rotation. This field protects the Earth from
          the effects of solar wind.
         
        <h2>There is only one natural satellite of the planet Earth.</h2>
         
          As a percentage of the size of the body it orbits, the Moon is the
          largest satellite of any planet in our solar systm. In real terms,
          however, it is only the fifth largest natural satellite.
         `,
  Mars: `

          Mars is the fourth planet from the sun. Befitting the red planet's
          bloody color, the Romans named it after their god of war. The Romans
          copied the ancient Greeks, who also named the planet after their god
          of war, Ares. Other civilizations also typically gave the planet names
          based on its color — for example, the Egyptians named it "Her Desher,"
          meaning "the red one," while ancient Chinese astronomers dubbed it
          "the fire star."

        <h2>Mars and Earth have approximately the same landmass.</h2>
         
          Even though Mars has only 15% of the Earth’s volume and just over 10%
          of the Earth’s mass, around two thirds of the Earth’s surface is
          covered in water. Martian surface gravity is only 37% of the Earth’s
          (meaning you could leap nearly three times higher on Mars).
         
        <h2>Mars is home to the tallest mountain in the solar systm.</h2>
         
          Olympus Mons, a shield volcano, is 21km high and 600km in diameter.
          Despite having formed over billions of years, evidence from volcanic
          lava flows is so recent many scientists believe it could still be
          active.
         
        <h2>Only 18 missions to Mars have been successful.</h2>
         
          As of September 2014 there have been 40 missions to Mars, including
          orbiters, landers and rovers but not counting flybys. The most recent
          arrivals include the Mars Curiosity mission in 2012, the MAVEN
          mission, which arrived on September 22, 2014, followed by the Indian
          Space Research Organization’s MOM Mangalyaan orbiter, which arrived on
          September 24, 2014. The next missions to arrive will be the European
          Space Agency’s ExoMars mission, comprising an orbiter, lander, and a
          rover, followed by NASA’s InSight robotic lander mission, slated for
          launch in March 2016 and a planned arrival in September, 2016.
         
        <h2>Mars has the largest dust storms in the solar systm.</h2>
         
          They can last for months and cover the entire planet. The seasons are
          extreme because its elliptical (oval-shaped) orbital path around the
          Sun is more elongated than most other planets in the solar systm.
         `,
  Jupiter: `  

          Jupiter is the largest planet in the solar systm. Fittingly, it was
          named after the king of the gods in Roman mythology. In a similar
          manner, the ancient Greeks named the planet after Zeus, the king of
          the Greek pantheon.

          Jupiter helped revolutionize the way we saw the universe and ourselves
          in 1610, when Galileo discovered Jupiter's four large moons — Io,
          Europa, Ganymede and Callisto, now known as the Galilean moons. This
          was the first time that celestial bodies were seen circling an object
          other than Earth, major support of the Copernican view that Earth was
          not the center of the universe.
         
        <h2>Jupiter is the fourth brightest object in the solar systm.</h2>
         
          Only the Sun, Moon and Venus are brighter. It is one of five planets
          visible to the naked eye from Earth.
         
        <h2>
          The ancient Babylonians were the first to record their sightings of
          Jupiter.
        </h2>
         
          This was around the 7th or 8th century BC. Jupiter is named after the
          king of the Roman gods. To the Greeks, it represented Zeus, the god of
          thunder. The Mesopotamians saw Jupiter as the god Marduk and patron of
          the city of Babylon. Germanic tribes saw this planet as Donar, or
          Thor.
         
        <h2>Jupiter has the shortest day of all the planets.</h2>
         
          It turns on its axis once every 9 hours and 55 minutes. The rapid
          rotation flattens the planet slightly, giving it an oblate shape.
         
        <h2>Jupiter orbits the Sun once every 11.8 Earth years.</h2>
         
          From our point of view on Earth, it appears to move slowly in the sky,
          taking months to move from one constellation to another.
         `,
  Saturn: `  

          Saturn is the sixth planet from the sun and the second largest planet
          in the solar systm. Saturn was the Roman name for Cronus, the lord of
          the Titans in Greek mythology. Saturn is the root of the English word
          "Saturday."

          Saturn is the farthest planet from Earth visible to the naked human
          eye, but it is through a telescope that the planet's most outstanding
          features can be seen: Saturn's rings. Although the other gas giants in
          the solar systm — Jupiter, Uranus and Neptune — also have rings, those
          of Saturn are without a doubt the most extraordinary.
         
        <h2>Saturn can be seen with the naked eye.</h2>
         
          It is the fifth brightest object in the solar systm and is also easily
          studied through binoculars or a small telescope.
         
        <h2>
          Saturn was known to the ancients, including the Babylonians and Far
          Eastern observers.
        </h2>
         
          It is named for the Roman god Saturnus, and was known to the Greeks as
          Cronus.
         
        <h2>Saturn is the flattest planet.</h2>
         
          Its polar diameter is 90% of its equatorial diameter, this is due to
          its low density and fast rotation. Saturn turns on its axis once every
          10 hours and 34 minutes giving it the second-shortest day of any of
          the solar systm’s planets.
         
        <h2>Saturn orbits the Sun once every 29.4 Earth years.</h2>
         
          Its slow movement against the backdrop of stars earned it the nickname
          of “Lubadsagush” from the ancient Assyrians. The name means “oldest of
          the old”.
         `,
  Uranus: ` 
  
          Uranus is the seventh planet from the sun and the first to be
          discovered by scientists. Although Uranus is visible to the naked eye,
          it was long mistaken as a star because of the planet's dimness and
          slow orbit. The planet is also notable for its dramatic tilt, which
          causes its axis to point nearly directly at the sun.

          British astronomer William Herschel discovered Uranus accidentally on
          March 13, 1781, with his telescope while surveying all stars down to
          those about 10 times dimmer than can be seen by the naked eye. One
          "star" seemed different, and within a year Uranus was shown to follow
          a planetary orbit.
         
        <h2>
          Uranus was officially discovered by Sir William Herschel in 1781.
        </h2>
         
          It is too dim to have been seen by the ancients. At first Herschel
          thought it was a comet, but several years later it was confirmed as a
          planet. Herscal tried to have his discovery named “Georgian Sidus”
          after King George III. The name Uranus was suggested by astronomer
          Johann Bode. The name comes from the ancient Greek deity Ouranos.
         
        <h2>Uranus turns on its axis once every 17 hours, 14 minutes.</h2>
         
          The planet rotates in a retrograde direction, opposite to the way
          Earth and most other planets turn.
         
        <h2>Uranus makes one trip around the Sun every 84 Earth years.</h2>
         
          During some parts of its orbit one or the other of its poles point
          directly at the Sun and get about 42 years of direct sunlight. The
          rest of the time they are in darkness.
         
        <h2>Uranus is often referred to as an “ice giant” planet.</h2>
         
          Like the other gas giants, it has a hydrogen upper layer, which has
          helium mixed in. Below that is an icy “mantle, which surrounds a rock
          and ice core. The upper atmosphere is made of water, ammonia and the
          methane ice crystals that give the planet its pale blue colour.
         `,
  Neptune: `
  
          Neptune is the eighth planet from the sun. It was the first planet to
          get its existence predicted by mathematical calculations before it was
          actually seen through a telescope on Sept. 23, 1846. Irregularities in
          the orbit of Uranus led French astronomer Alexis Bouvard to suggest
          that the gravitational pull from another celestial body might be
          responsible. German astronomer Johann Galle then relied on subsequent
          calculations to help spot Neptune via telescope. Previously,
          astronomer Galileo Galilei sketched the planet, but he mistook it for
          a star due to its slow motion. In accordance with all the other
          planets seen in the sky, this new world was given a name from Greek
          and Roman mythology — Neptune, the Roman god of the sea.

          Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning
          that astronomers have done most studies using ground-based telescopes.
          Today, there are still many mysteries about the cool, blue planet,
          such as why its winds are so speedy and why its magnetic field is
          offset.
         
        <h2>Neptune was not known to the ancients.</h2>
         
          It is not visible to the naked eye and was first observed in 1846. Its
          position was determined using mathematical predictions. It was named
          after the Roman god of the sea.
         
        <h2>Neptune spins on its axis very rapidly.</h2>
         
          Its equatorial clouds take 18 hours to make one rotation. This is
          because Neptune is not solid body.
         
        <h2>Neptune is the smallest of the ice giants.</h2>
         
          Despite being smaller than Uranus, Neptune has a greater mass. Below
          its heavy atmosphere, Uranus is made of layers of hydrogen, helium,
          and methane gases. They enclose a layer of water, ammonia and methane
          ice. The inner core of the planet is made of rock.
         
        <h2>
          The atmosphere of Neptune is made of hydrogen and helium, with some
          methane.
        </h2>
         
          The methane absorbs red light, which makes the planet appear a lovely
          blue. High, thin clouds drift in the upper atmosphere.
         `,
  Pluto: ` 

          Pluto, once considered the ninth and most distant planet from the sun,
          is now the largest known dwarf planet in the solar systm. It is also
          one of the largest known members of the Kuiper Belt, a shadowy zone
          beyond the orbit of Neptune thought to be populated by hundreds of
          thousands of rocky, icy bodies each larger than 62 miles (100
          kilometers) across, along with 1 trillion or more comets.

          In 2006, Pluto was reclassified as a dwarf planet, a change widely
          thought of as a demotion. The question of Pluto's planet status has
          attracted controversy and stirred debate in the scientific community,
          and among the general public, since then. In 2017, a science group
          (including members of the New Horizon mission) proposed a new
          definition of planethood based on "round objects in space smaller than
          stars," which would make the number of planets in our solar systm
          expand from 8 to roughly 100.
         
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/asd.jpeg" />
        <h2>Pluto is named after the Greek god of the underworld.</h2>
         
          This is a later name for the more well known Hades and was proposed by
          Venetia Burney an eleven year old schoolgirl from Oxford, England.
         
        <h2>Pluto was reclassified from a planet to a dwarf planet in 2006.</h2>
         
          This is when the IAU formalised the definition of a planet as “A
          planet is a celestial body that (a) is in orbit around the Sun, (b)
          has sufficient mass for its self-gravity to overcome rigid body forces
          so that it assumes a hydrostatic equilibrium (nearly round) shape, and
          (c) has cleared the neighbourhood around its orbit.”
         
        <h2>
          Pluto was discovered on February 18th, 1930 by the Lowell Observatory.
        </h2>
         
          For the 76 years between Pluto being discovered and the time it was
          reclassified as a dwarf planet it completed under a third of its orbit
          around the Sun.
         
        <h2>Pluto has five known moons.</h2>
         
          The moons are Charon (discovered in 1978,), Hydra and Nix (both
          discovered in 2005), Kerberos originally P4 (discovered 2011) and Styx
          originally P5 (discovered 2012) official designations S/2011 (134340)
          1 and S/2012 (134340) 1.
         `,

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
