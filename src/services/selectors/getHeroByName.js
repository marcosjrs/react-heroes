import { heroes } from "../../data/heroes";

export const getHeroByName = (name) =>{
  name = name.toLowerCase();
  return heroes.filter((h) => h.superhero.toLocaleLowerCase().includes(name));
}