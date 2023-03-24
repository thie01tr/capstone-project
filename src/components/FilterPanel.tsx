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
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const FilterPanel = () => {
  const isAdultLabel = { inputProps: { "aria-label": "Show Adult Rated" } };

  return (
    // <Grid container spacing={3}>
    // {/* isAdult */}
    <Grid container spacing={3}>
      <Grid container xs={2}>
        <Checkbox {...isAdultLabel}></Checkbox>
      </Grid>
      <Grid container xs={8}>
        <Typography component="div" variant="h6">
          Show Rated R
        </Typography>
      </Grid>
      <Grid container></Grid>
    </Grid>

    // {/* rating */}
    // <Grid  container spacing={3}></Grid>

    // {/* genre */}
    //<Grid  container spacing={3}></Grid>

    // </Grid>
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
              <FormLabel id="demo-row-radio-buttons-group-label">
                Filter
              </FormLabel>
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
  );
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
          <FormControlLabel value="Rating" control={<Radio />} label="Rating" />
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
  );
};

export default FilterPanel;
