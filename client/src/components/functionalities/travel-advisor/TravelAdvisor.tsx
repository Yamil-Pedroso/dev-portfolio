import { useState,  useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';


interface Place {
    id?: string;
    name: string;
    num_reviews: number;
    rating: number;
}


const TravelAdvisor = () => {
    const [places, setPlaces] = useState<Place[]>([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [childClicked, setChildClicked] = useState(null);

    const [weatherData, setWeatherData] = useState([]);
    const [coordinates, setCoordinates] = useState({}) as any;
    const [bounds, setBounds] = useState({}) as any;

    const [isLoading, setIsLoading] = useState(false);
    const [ type, setType ] = useState('restaurants');
    const [ rating, setRating ] = useState<number>(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter(place => place.rating > rating) ;
        
        setFilteredPlaces(filteredPlaces as any);
        // eslint-disable-next-line
    }, [rating, places])

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
           setIsLoading(true);

           getWeatherData({lat: coordinates.lat, lng: coordinates.lng})
            .then((data) => setWeatherData(data));

            getPlacesData({type, sw: bounds.sw, ne: bounds.ne})
                .then((data) => {
                    setPlaces(data?.filter((place: any)=> place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setIsLoading(false);
                })
        }
    }, [type, bounds]);

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} sm={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={setChildClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default TravelAdvisor;
