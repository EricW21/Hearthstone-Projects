import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Dropdown({ fetchResult, selectedOption, setSelectedOption }) {
  

  const handleChange = (event) => {
    if (fetchResult[event.target.value] && fetchResult[event.target.value].length!==0){
      setSelectedOption(event.target.value);
    }
    
    
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Player</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          label="Player"
          onChange={handleChange}
        >
          <MenuItem value={'jeef'}>Jeef</MenuItem>
          {/* <MenuItem value={'dog'}>Dog</MenuItem> */}
          <MenuItem value={'EBFRLH11'}>EBFRLH11</MenuItem>
          {/* <MenuItem value={'Bofur'}>Bofur</MenuItem>
          <MenuItem value={'MATSURI'}>MATSURI</MenuItem>
          
          <MenuItem value={'jkirek'}>Jkirek</MenuItem>
          <MenuItem value={'BeterBabbit'}>BeterBabbit</MenuItem>
          <MenuItem value={'awedragon'}>Awedragon</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
