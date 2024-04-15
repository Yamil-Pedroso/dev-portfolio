import bottle1 from './bottle1.png';
import bottle2 from './bottle2.png';
import bottle3 from './bottle3.png';
import bottle4 from './bottle4.png';
import bottle5 from './bottle5.png';
import bottle6 from './bottle6.png';
import bottle7 from './bottle7.png';
import bottle8 from './bottle8.png';
import bottle9 from './bottle9.png';
import bottle10 from './bottle10.png';
import bottle11 from './bottle11.png';
import bottle12 from './bottle12.png';

interface Potion {
    [key: string]: any;
}

const images: Potion = {
    bottle1,
    bottle2,
    bottle3,
    bottle4,
    bottle5,
    bottle6,
    bottle7,
    bottle8,
    bottle9,
    bottle10,
    bottle11,
    bottle12,
};

export default images;