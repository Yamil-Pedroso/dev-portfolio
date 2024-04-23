import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import  locationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from './mapStyles';
import useStyles from './styles';

interface MapProps {
    setCoordinates: (coordinates: { lat: number, lng: number }) => void;
    setBounds: (bounds: { ne: any, sw: any }) => void;
    coordinates: { lat: number, lng: number };
    places: any[]; 
    setChildClicked: (child: any) => void; 
    weatherData: any; 
}


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }: MapProps) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: "AIzaSyCQhsEyTcQ1ssyVIkehsomRYE5_SoVUUfQ" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place: any, index: any) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                    {
                        !isDesktop ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img 
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg'}
                                    alt={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly/>
                            </Paper>
                        )
                    }
                    </div>
                ))}
                {weatherData?.list?.length && weatherData.list.map((data: any, i: any) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" alt=""/>
                </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map