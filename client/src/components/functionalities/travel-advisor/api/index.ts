import axios from 'axios';

//const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

interface IData {
    type: string;
    sw: { lat: number, lng: number };
    ne: { lat: number, lng: number };
}


export const getPlacesData = async ({type, sw, ne}: IData) => {
    console.log(URL)
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key':  import.meta.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                },
            });
            
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async ({lat, lng}:
    {lat: number, lng: number}
) => {
    try {
        const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/find`, {
            params: {
              lat: lat,
              lng: lng,
            },
            headers: {
                'x-rapidapi-key':  import.meta.env.REACT_APP_RAPIDAPI_KEY,
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });
            
        return data;
    } catch (error) {
        console.log(error);
    }
}