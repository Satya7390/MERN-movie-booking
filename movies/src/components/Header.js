import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';
const dumyArray = ["Ram", "Shyam", "Jai Hind", "Jai Bharat"];

const Header = () => {
    const [value, setvalue] = useState(0);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getAllMovies()
          .then((data) => setMovies(data.movies))
          .catch((err) => console.log(err));
    },[]);
    return <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
            <Box width={"50%"}>
                <MovieFilterIcon />
            </Box>
            <Box position={"auto"} width={"20%"} margin={"auto"} >
                <Autocomplete
                    freeSolo
                    options={dumyArray.map((option) => option)}
                    renderInput={(params) => <TextField
                        sx={{ input: { color: "whitesmoke" } }}  variant='standard' {...params} placeholder="Search Across Multiple movies" />}
                />
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val) => setvalue(val)} >
                    <Tab LinkComponent={Link} to="/movies" label="Movies" />
                    <Tab LinkComponent={Link} to="/admin" label="Admin" />
                    <Tab LinkComponent={Link} to="/auth" label="Auth" />
                </Tabs>
            </Box>

        </Toolbar>
    </AppBar>;
};

export default Header 