import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = (publisher) =>
  heroes.filter((heroe) => heroe.publisher === publisher);
