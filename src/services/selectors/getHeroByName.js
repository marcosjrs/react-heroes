import { heroes } from "../../data/heroes";

export const getHeroByName = (name='') =>{
  if(!name.length) return [];
  name = name.toLowerCase();
  return heroes.filter((h) => h.superhero.toLocaleLowerCase().includes(name));
}