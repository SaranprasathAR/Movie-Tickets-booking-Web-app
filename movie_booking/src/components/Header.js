import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Autocomplete, TextField,Tab, Tabs} from '@mui/material'
// import MovieIcon from "@mui/icons-material/Movie";
import TheatersIcon from '@mui/icons-material/Theaters';
import {Box} from "@mui/system";
// import Tab from '@material-ui/core/Tab';
const MArray=['Avengers: Endgame', 'Inception', 'The Lion King',
'Jurassic Park 3D', 'Toy Story 4', 'Avatar 2', 'The Dark Knight',
'Finding Nemo', 'Jaws', 'Interstellar', 'Pulp Fiction', 'Frozen',
'The Matrix', 'Mad Max: Fury Road', 'E.T. the Extra-Terrestrial',
'Black Panther', 'Titanic', 'The Avengers',
'Spider-Man: No Way Home', 'The Shawshank Redemption',
'The Lord of the Rings: The Fellowship of the Ring',
'Forrest Gump', 'Guardians of the Galaxy', 'Wonder Woman',
'Back to the Future', 'The Sound of Music', 'Jurassic World',
'Toy Story', 'Avengers: Age of Ultron', 'The Godfather',
'Deadpool', 'The Dark Knight Rises', 'Finding Dory',
'Star Wars: The Force Awakens', 'Incredibles 2',
'The Lion King (2019)', 'E.T. the Extra-Terrestrial (Re-release)',
'Doctor Strange', 'The Martian', 'Finding Nemo 3D',
'The Lego Movie']

// const fs=require('fs');
// const csv=require("csvtojson");
// const Parser =require("json2csv");

// (async ()=> {
//     const movies= await csv().fromFile("C:\Users\Saran\Documents\BoB\movie_booking\movies_info.csv");
//     const MArray=movies.movie_name
// })

const Header=() =>{
        const [value,setValue]=useState(0)
    return <AppBar>
        <Toolbar sx={{backgroundColor: 'Purple'}}>
            <Box>
                <TheatersIcon />
            </Box>
            <Box>
                <h2>Book tickets</h2>
            </Box>
            <Box width={"30%"} margin={"auto"} bgcolor="white">
            <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={MArray.map((option) => option)}
            renderInput={(params) => <TextField variant="standard" {...params} placeholder="Search"/>}
            /> 
            </Box>
            <Box display={'flex'}>
                <Tabs textColor="inherit" indicatorColor="secondary"  value={value} onChange={(e,val)=> setValue(val)}>
                    <Tab label="Login / Signup" />
                    <Tab label="Admin" />
                    <Tab label="Movies" />
                </Tabs>
            </Box>
        </Toolbar>

    </AppBar>

};

export default Header;
 