import React, { useEffect, useState } from 'react';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function ShellForm(props) {
  const [shelfId, setShelfId] = useState('');
  const [shelfName, setShelfName] = useState('');
  const [shelfType, setShelfType] = useState();
  const [shelfDimention, setShelfDimention] = useState();
  const [shelfNoOfPar, setShelfNoOfPar] = useState();

  const [open, setOpen] = useState(props.openValue);

  const submit = () => {
    let allShelf = localStorage.getItem('allShelf')
      ? JSON.parse(localStorage.getItem('allShelf'))
      : [];
    allShelf.push({
      shelfId,
      shelfName,
      shelfType,
      shelfDimention,
      shelfNoOfPar,
    });
    localStorage.setItem('allShelf', JSON.stringify(allShelf));
  };

  return (
    <Popover
      open={props.openValue}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      PaperProps={{
        style: {
          width: '30%',
        },
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="space-between"
        alignItems={'center'}
        paddingX={4}
        paddingY={4}
      >
        <Box>
          <Typography># 24DGH54 Medium-Freeze</Typography>
          <h2>Add new shelf</h2>
        </Box>
        <Button
          onClick={() => {
            props.handleFormDisplay();
          }}
        >
          <img src={require('../assets/icons/Close.png')}></img>
        </Button>
      </Box>

      <Box
        paddingX={4}
        paddingY={4}
        display={'flex'}
        gap={0.5}
        flexDirection={'column'}
      >
        <TextField
          id="shelf-id"
          label="Shelf id"
          variant="filled"
          onChange={(e) => {
            setShelfId(e.target.value);
          }}
        />
        <br></br>

        <TextField
          id="shelf-name"
          label="Shelf name"
          variant="filled"
          onChange={(e) => {
            setShelfName(e.target.value);
          }}
        />
        <br></br>

        <FormControl variant="filled">
          <InputLabel id="shelf-type">Shelf type</InputLabel>
          <Select
            labelId="shelf-type"
            id="shelf-type"
            //   value={age}
            onChange={(e) => {
              setShelfType(e.target.value);
            }}
          >
            <MenuItem value={1}>Small-Freeze</MenuItem>
            <MenuItem value={2}>Medium-Freeze</MenuItem>
            <MenuItem value={3}>Large-Freeze</MenuItem>
          </Select>
        </FormControl>
        <br></br>

        <FormControl variant="filled">
          <InputLabel id="shelf-dimensions">Shelf dimensions</InputLabel>
          <Select
            labelId="shelf-dimensions"
            id="shelf-dimensions"
            //   value={age}
            onChange={(e) => {
              setShelfDimention(e.target.value);
            }}
          >
            <MenuItem value={1}>200x150x40cm</MenuItem>
            <MenuItem value={2}>400x300x80cm</MenuItem>
            <MenuItem value={3}>4800x600x160cm</MenuItem>
          </Select>
        </FormControl>
        <br></br>

        <FormControl variant="filled">
          <InputLabel id="no-of-partitions">No. of partitions</InputLabel>
          <Select
            labelId="no-of-partitions"
            id="no-of-partitions"
            //   value={age}
            onChange={(e) => {
              setShelfNoOfPar(e.target.value);
            }}
          >
            <MenuItem value={1}>2</MenuItem>
            <MenuItem value={2}>5</MenuItem>
            <MenuItem value={3}>10</MenuItem>
          </Select>
        </FormControl>
        <br></br>
      </Box>

      <Box paddingX={4} paddingY={4}>
        <Button>
          <img src={require('../assets/icons/Close.png')}></img>
          <Typography padding={1}>Cancel</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            submit();
          }}
        >
          <img src={require('../assets/icons/Check-small.png')}></img>
          <Typography padding={1}>Save</Typography>
        </Button>
      </Box>
    </Popover>
  );
}
