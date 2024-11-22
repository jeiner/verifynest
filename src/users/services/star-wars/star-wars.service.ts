import { Injectable } from "@nestjs/common";
import { User, UserStatus } from "./../../entities/users";
import { v4 as uuidv4 } from "uuid";
import { UpdateUserDto } from "../../dto/user.dto";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from 'rxjs';
import { PeopleEntity, PlanetEntity } from "../../entities/starwars.entites";

@Injectable()
export class StarWarsService {
  base_url = 'https://swapi.dev/';

  constructor(private  httpService: HttpService) {
  }

  async getPeople(params: string): Promise<PeopleEntity[]> {
    const url = `${this.base_url}api/people${params}`;
    try {
      // Realiza una solicitud GET
      const response = await lastValueFrom(this.httpService.get(url));
      // return response.data; // Retorna los datos de la respuesta
      // Mapea los resultados al modelo PeopleEntity
      return response.data.results.map((person: any) => {
        return {
          name: person.name,
          height: person.height,
          mass: person.mass,
          hair_color: person.hair_color,
          skin_color: person.skin_color,
          eye_color: person.eye_color,
          birth_year: person.birth_year,
          gender: person.gender,
          homeworld: person.homeworld,
          films: person.films || [],
          species: person.species || [],
          vehicles: person.vehicles || [],
          starships: person.starships || [],
          created: person.created,
          edited: person.edited,
          url: person.url,
        } as PeopleEntity;
      });
    } catch (error) {
      throw new Error(`Error al consumir la API: ${error.message}`);
    }
  }


  async getAllPlanets(params:string): Promise<PlanetEntity[]>{
    const url = `${this.base_url}api/planets${params}`
    try {
      const response = await  lastValueFrom(this.httpService.get(url))
      return response.data.results.map((planet: any) => {
        return {
          name: planet.name,
          rotation_period: planet.rotation_period,
          orbital_period: planet.orbital_period,
          diameter: planet.diameter,
          climate: planet.climate,
          gravity: planet.gravity,
          terrain: planet.terrain,
          surface_water: planet.surface_water,
          population: planet.population,
          residents: planet.residents || [], // URLs de los residentes
          films: planet.films || [], // URLs de las películas
          created: planet.created, // Fecha de creación
          edited: planet.created, // Fecha de última edición
          url: planet.url, // URL de la entidad en la API
        }
      });
    }catch (error) {
      throw new Error(`Error al consumir la Api de planetas ${error.message}`)
    }
  }

  private users: User[] = [
    {
      id: "1",
      title: "jeiner",
      description: "full stack developer",
      estatus: UserStatus.PENDING
    }
  ];

  generateUniqueId(): string {
    return uuidv4(); // Genera un UUID único
  }

  getAllUsers() {
    return this.users;
  }

  createUser(title: string, description: string) {
    const user = {
      id: this.generateUniqueId(),
      title,
      description,
      estatus: UserStatus.PENDING
    };
    this.users.push(user);

    return user;
  }

  getUserById(id: string): User {
    return this.users.find(user => user.id == id);
  }

  updateUser(id: string, updateFields: UpdateUserDto): User {
    const user = this.getUserById(id);

    const newUser = Object.assign(user, updateFields);

    this.users = this.users.map((user) => (user.id === id ? newUser : user));

    return newUser;
  }

  DeleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }


}
