import React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 200,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#8b8c8e',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#8b8c8e',
  '& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    // // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    alignItems: 'left',
    justifyContent: 'left',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: '#ffcc00',
  borderColor: 'none',
}));

export default function SearchBar() {
  return (
    <Box sx={{ marginBottom: 3, backgroundColor: '#222428', borderRadius: 10 }}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="space-between"
        alignItems={'center'}
        paddingX={2}
        paddingY={2}
      >
        <Grid container spacing={1} justifyContent="space-between">
          <Grid display={'flex'} gap={2} alignItems="flex-start" item xs={8}>
            <Box>
              <Typography color={'#8b8c8e'}>
                FixelMagic Shelf Configuration
              </Typography>
              <Typography align={'left'} color={'#ececec'} fontSize={20}>
                Shelves
              </Typography>
            </Box>
          </Grid>
          <Grid display={'flex'} justifyContent={'flex-end'} item xs={4}>
            <CustomButton>
              <img src={require('../assets/icons/Scanner.png')}></img>
            </CustomButton>
          </Grid>
        </Grid>
      </Box>

      <Search paddingX={2} paddingY={2}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <br></br>
    </Box>
  );
}
