import { heroes, type Hero } from "../data/heros.data";

const getHeroById = (id: number): Hero => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    if(!hero){
        throw new Error(`No existe un heroe con el id ${id}`)
    }
}

console.log(getHeroById(2));