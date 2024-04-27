export interface IPizza {
    id?: string;
    name?: string;
    image?: string;

    addBase: (base: string) => void
    pizza: {
      base: string
      toppings: string[]
    }
}

