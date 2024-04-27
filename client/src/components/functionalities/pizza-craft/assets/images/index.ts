import logoPizza from './pizza/pizza.png';
import chef from './pizza/chef.jpg';
import pizzaAnimation from './pizza/pizza-ani.gif';
import woodOven from './pizza/wood-oven.gif';
import pizzaDelivery from './pizza/pizza-delivery.gif';
import pizzaChorrea from './pizza/cheese-chorrea.png';

// Toppings
import mushrooms from './pizza/toppings/mushroom.png';
import chiliPeppers from './pizza/toppings/chili-pepper.png';
import onions from './pizza/toppings/onion.png';
import olives from './pizza/toppings/olives.png';
import extraCheese from './pizza/toppings/cheese.png';
import tomatoes from './pizza/toppings/tomato.png';

interface IImages {
    [key: string]: string
}

const images: IImages = {
    chef,
    logoPizza,
    pizzaAnimation,
    pizzaDelivery,
    woodOven,
    mushrooms,
    chiliPeppers,
    onions,
    olives,
    extraCheese,
    tomatoes,
    pizzaChorrea
}

export default images;