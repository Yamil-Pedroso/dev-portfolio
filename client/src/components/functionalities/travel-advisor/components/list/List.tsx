import { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../place-details/PlaceDetails';

import useStyles from './styles';

interface ListProps {
    places: any;
    childClicked: any;
    isLoading: any;
    type: any;
    setType: any;
    rating: any;
    setRating: any;
}

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }: ListProps) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill(
            null
        ).map((_, index) => elRefs[index] || createRef());

        setElRefs(refs);
        // eslint-disable-next-line
    }, [places])


    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
            <>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurant">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place: any, index: any) => (
                    <Grid item xs={12} key={index}>
                        <PlaceDetails 
                            place={place}
                            selected={Number(childClicked) === index}
                            refProp={elRefs[index]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )
}

export default List