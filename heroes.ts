// type Hero = {
//     readonly id?: string,
//     name: string
//     age: number
//     isActive?: boolean
// }

type HeroProperties = {
    readonly id?: string
    isActive?: boolean
}

type HeroInput = {
    name: string
    age: number
}

type Hero = HeroInput & HeroProperties


function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return { id: crypto.randomUUID(), name, age, isActive: true }
}

const thor = createHero({ name: 'Thor', age: 1500 })

console.log(thor.isActive)
