import Grid from "@mui/material/Unstable_Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GenreList from "./GenreList";
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import Switch from '@mui/material/Switch';
import { MoviesContext } from "../context/MoviesContext";
import { useContext,useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';

const FilterPanel = () =>{
    const {
      //isAdult
      isAdult,
      toggleIsAdult,
      isAdultFiltered,
      toggleIsAdultFiltered,

      //Rating

      rating,
      setRating,
      isRatingFiltered,
      toggleIsRatingFiltered,
      //Genre
    

  
  } = useContext(MoviesContext);
  console.log(isAdult);
  return(
    //isAdult
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3} minHeight={160}>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Checkbox 
        checked={isAdultFiltered} 
        onChange={toggleIsAdultFiltered}
        inputProps={{ 'aria-label': 'isAdultFiltered' }}></Checkbox>
      </Grid>
      <Grid display="flex" justifyContent="left" alignItems="center">
      <Typography component="div" variant="h6">
        Show Adult Rated
              </Typography>
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
      <Switch
      checked={isAdult}
      onChange={toggleIsAdult}
      inputProps={{ 'aria-label': 'isAdult' }}
    />
      </Grid>
    </Grid>

    {/* rating */}
    <Grid container spacing={2} minHeight={160}>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Checkbox 
        checked={isRatingFiltered} 
        onChange={toggleIsRatingFiltered}
        inputProps={{ 'aria-label': 'isRatingFiltered' }}></Checkbox>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
      <Typography component="div" variant="h6">
        Rating
              </Typography>
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        {/* <Rating
           name="rating"
           max={10}
           value={rating}
           onChange={(event, newValue) => {
             setRating(newValue?newValue:0);
           }}
        /> */}
        <Slider
        value={rating}
        onChange={(_, value) => setRating(value as number)}
        aria-label="rating"
        defaultValue={0}
        step={0.1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
      </Grid>
    </Grid>
  </Box>

      // {/* genre */}
      //<Grid  container spacing={3}></Grid>




    

  );
};


const FilterPanelv2 = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "#e8eaebc2" }}>
        <Grid container spacing={1} sx={{ justifyContent: "space-evenly" }}>
          <Grid container xs={12}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
          </Grid>
          <Grid container xs={12}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Rating"
              control={<Radio />}
              label="Rating"
            />
            <FormControlLabel value="Age" control={<Radio />} label="Age" />
            <FormControlLabel
              value="Language"
              control={<Radio />}
              label="Language"
            />
          </RadioGroup>
          <FormLabel id="demo-row-genre-dropdown-list">Genre</FormLabel>
          
        </FormControl>
          </Grid>
          <Grid container xs={12}>
          <GenreList />
          </Grid>
        
        
        </Grid>
      </Box>
    </Container>
  )
};


const FilterPanelv1 = () => {
  return (
    <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Rating"
              control={<Radio />}
              label="Rating"
            />
            <FormControlLabel value="Age" control={<Radio />} label="Age" />
            <FormControlLabel
              value="Language"
              control={<Radio />}
              label="Language"
            />
          </RadioGroup>
          <FormLabel id="demo-row-genre-dropdown-list">Genre</FormLabel>
          <GenreList />
        </FormControl>
      </Box>
  )
};

export default FilterPanel;
