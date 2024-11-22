// entities/person.entity.ts
export class PeopleEntity {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created: string;
  edited: string;
  url: string;
}


export class PlanetEntity {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents?: string[]; // URLs de los residentes
  films?: string[]; // URLs de las películas
  created: string; // Fecha de creación
  edited: string; // Fecha de última edición
  url: string; // URL de la entidad en la API
}

