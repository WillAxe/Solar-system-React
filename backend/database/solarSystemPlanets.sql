CREATE DATABASE SolarSystemPlanets;

CREATE TABLE Planets(
    PlanetID INT AUTO_INCREMENT NOT NULL,
    PlanetName varchar(50) UNIQUE NULL,
    PlanetType varchar(50) NOT NULL,
    Mass varchar(50) NOT NULL,
    Moons INT NOT NULL,
    DistanceFromSun DECIMAL(10,2) NOT NULL,
    HasRings BOOLEAN NOT NULL,
    PRIMARY KEY(PlanetID)
);

INSERT INTO Planets (PlanetName,PlanetType, Mass, Moons, DistanceFromSun, HasRings)
VALUES
    ('Mercury', 'Terrestrial Planet', '3.30x10^24', 0, 0.39, 0 ),
    ('Venus','Terrestrial Planet', '4.87x10^24', 0 , 0.72, 0),
    ('Earth','Terrestrial Planet', '5.97x10^24', 1 , 1, 0),
    ('Mars','Terrestrial Planet', '6.41x10^24', 2 , 1.52, 0),
    ('Jupiter','Gas giant', '1.89x10^27', 95 , 5.2, 1),
    ('Saturn','Gas giant', '5.68x10^26', 274 , 9.5, 1),
    ('Uranus','Gas giant', '8.68x10^25', 28 , 19.2, 1),
    ('Neptune','Gas giant', '1.024x10^26', 16 , 30, 1),
    ('Pluto', 'Dwarf Planet', '1.303x10^22', 5, 39, 0);


CREATE TABLE Moons(
    MoonID INT AUTO_INCREMENT NOT NULL,
    MoonName varchar(50) UNIQUE NOT NULL ,
    MoonPlanetID INT NOT NULL,
    PRIMARY KEY(MoonID),
    FOREIGN KEY (MoonPlanetID) REFERENCES Planets(PlanetID)
);


INSERT INTO Moons(MoonName, MoonPlanetID)
VALUES
('Moon', 3),
('Phobos', 4),
('Deimos', 4),
('Io', 5),
('Europa', 5),
('Ganymede', 5),
('Callisto', 5),
('Titan', 6),
('Enceladus', 6),
('Mimas', 6),
('Rhea', 6),
('Titania', 7),
('Oberon', 7),
('Ariel', 7),
('Umbriel', 7),
('Triton', 8),
('Nereid', 8),
('Amalthea', 5),
('Lysithea', 5),
('Tethys', 6),
('Hippocamp', 8),
('Hyperion', 6);



CREATE TABLE CometsAndAsteroids(
    ObjectID INT AUTO_INCREMENT NOT NULL,
    ObjectName Varchar(50) NOT NUll UNIQUE,
    ObjectType VARCHAR(50) NOT NULL,
    PRIMARY KEY (ObjectID)
);

INSERT INTO CometsAndAsteroids(ObjectName,ObjectType)
VALUES
    ('Halleys comet', 'Comet'),
    ('. Hyakutake', 'Comet'),
    ('Vesta', 'Asteroid'),
    ('Ida', 'Asteroid'),
    ('Hale-Bopp', 'Comet'),
    ('Dactyl', 'Asteroid'),
    ('Eros', 'Asteroid'),
    ('Hektor', 'Asteroid'),
    ('Astraea', 'Asteroid'),
    ('Comet McNaught', 'Comet'),
    ('Pallas', 'Asteroid'),
    ('Encke', 'Comet');

