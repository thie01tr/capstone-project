import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  
  
return (
    <header className="Header">
        {/* Icon     |     Title    |    Buttons */}

        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <HomeIcon/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <h1 className='Title'>Movie APP</h1>
        <Divider orientation="vertical" variant="middle" flexItem />
        
        <p className="Header__attribution">
        Powered By <a href="https://api.themoviedb.org/">TheMovieDB</a>
        </p>
        <Divider orientation="vertical" variant="middle" flexItem />
        <FavoriteIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FilterListIcon />
        
      </Box>


     
    </header>
  )
};

export default Header;