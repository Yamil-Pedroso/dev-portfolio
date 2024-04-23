import React,{ useState }  from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

interface HeaderProps {
    setCoordinates: (coordinates: { lat: number, lng: number }) => void;
}

const Header = ({ setCoordinates }: 
    HeaderProps
) => {
    const classes  = useStyles();
    const [autocomplete, setAutocomplete] = useState(null) as any;

    const onLoad = (autoC: any) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position="static">
           <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    World Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </div>
                </Box>
           </Toolbar>
        </AppBar>
    )
}

export default Header

