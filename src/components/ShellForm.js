import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

//Create customize button
const CustomButtonN = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
}));

//Create customize button
const CustomButtonDel = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
  backgroundColor: '#141518',
  color: '#8b8c8e',
  borderColor: '#8b8c8e',
}));

export default function ShellForm(props) {
  const [shelfId, setShelfId] = useState(
    props.isEditable ? props.data.shelfId : ''
  );
  const [shelfName, setShelfName] = useState(
    props.isEditable ? props.data.shelfName : ''
  );
  const [shelfType, setShelfType] = useState(
    props.isEditable ? props.data.shelfType : ''
  );
  const [shelfDimention, setShelfDimention] = useState(
    props.isEditable ? props.data.shelfDimention : ''
  );
  const [shelfNoOfPar, setShelfNoOfPar] = useState(
    props.isEditable ? props.data.shelfNoOfPar : ''
  );

  const [open, setOpen] = useState(props.openValue);

  //Add a new shelf
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
    setShelfId('');
    setShelfName('');
    setShelfType('');
    setShelfDimention('');
    setShelfNoOfPar('');
    props.setAllSshelfData();
    props.handleFormDisplay();
  };

  //Update shelf data
  const updateShelf = async () => {
    try {
      const newAllShelf = await Promise.all(
        JSON.parse(localStorage.getItem('allShelf')).map(
          (singleShelf, index) => {
            if (index === props.editableIndex) {
              return {
                shelfId,
                shelfName,
                shelfType,
                shelfDimention,
                shelfNoOfPar,
              };
            }
            return singleShelf;
          }
        )
      );

      localStorage.setItem('allShelf', JSON.stringify(newAllShelf));
      props.setAllSshelfData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover
      open={props.openValue}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      sx={{ backgroundColor: '#222428' }}
      PaperProps={{
        style: {
          width: '30%',
          borderRadius: 10,
          backgroundColor: '#080808',
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
          <Typography color={'#8b8c8e'}># 24DGH54 Medium-Freeze</Typography>
          <Typography align={'left'} color={'#ececec'} fontSize={20}>
            {props.isEditable ? props.data.shelfName : 'Add new shelf'}
          </Typography>
        </Box>
        <Button
          onClick={() => {
            if (props.isEditable) {
              props.editableFormClosingFunction();
            } else {
              props.handleFormDisplay();
            }
          }}
        >
          <img src={require('../assets/icons/Close.png')}></img>
        </Button>
      </Box>

      <Box
        margin={2}
        paddingX={4}
        paddingY={4}
        display={'flex'}
        gap={0.5}
        flexDirection={'column'}
        backgroundColor={'#222428'}
        borderRadius={8}
      >
        <TextField
          id="shelf-id"
          label="Shelf id"
          variant="filled"
          InputLabelProps={{
            style: { color: '#8b8c8e' },
          }}
          InputProps={{
            style: { border: '1px solid #8b8c8e', borderRadius: 100 },
          }}
          onChange={(e) => {
            setShelfId(e.target.value);
          }}
          defaultValue={props.isEditable ? props.data.shelfId : shelfId}
          inputProps={{
            style: { color: '#ececec' },
          }}
          SelectDisplayProps={{
            style: { color: '#ececec' },
          }}
        />
        <br></br>

        <TextField
          id="shelf-name"
          label="Shelf name"
          variant="filled"
          InputLabelProps={{
            style: { color: '#8b8c8e' },
          }}
          InputProps={{
            style: { border: '1px solid #8b8c8e', borderRadius: 100 },
          }}
          onChange={(e) => {
            setShelfName(e.target.value);
          }}
          defaultValue={props.isEditable ? props.data.shelfName : shelfName}
          inputProps={{
            style: { color: '#ececec' },
          }}
          SelectDisplayProps={{
            style: { color: '#ececec' },
          }}
        />
        <br></br>

        <FormControl
          variant="filled"
          sx={{ border: '1px solid #8b8c8e', borderRadius: 100 }}
        >
          <InputLabel id="shelf-type" style={{ color: '#8b8c8e' }}>
            Shelf type
          </InputLabel>
          <Select
            labelId="shelf-type"
            id="shelf-type"
            onChange={(e) => {
              setShelfType(e.target.value);
            }}
            defaultValue={props.isEditable ? props.data.shelfType : shelfType}
            inputProps={{
              style: { color: '#ececec' },
            }}
            SelectDisplayProps={{
              style: { color: '#ececec' },
            }}
          >
            <MenuItem value={1}>Small-Freeze</MenuItem>
            <MenuItem value={2}>Medium-Freeze</MenuItem>
            <MenuItem value={3}>Large-Freeze</MenuItem>
          </Select>
        </FormControl>
        <br></br>

        <FormControl
          variant="filled"
          sx={{ border: '1px solid #8b8c8e', borderRadius: 100 }}
        >
          <InputLabel id="shelf-dimensions" style={{ color: '#8b8c8e' }}>
            Shelf dimensions
          </InputLabel>
          <Select
            labelId="shelf-dimensions"
            id="shelf-dimensions"
            //   value={age}
            onChange={(e) => {
              setShelfDimention(e.target.value);
            }}
            defaultValue={
              props.isEditable ? props.data.shelfDimention : shelfDimention
            }
            inputProps={{
              style: { color: '#ececec' },
            }}
            SelectDisplayProps={{
              style: { color: '#ececec' },
            }}
          >
            <MenuItem value={1}>200x150x40cm</MenuItem>
            <MenuItem value={2}>400x300x80cm</MenuItem>
            <MenuItem value={3}>4800x600x160cm</MenuItem>
          </Select>
        </FormControl>
        <br></br>

        <FormControl
          variant="filled"
          sx={{ border: '1px solid #8b8c8e', borderRadius: 100 }}
        >
          <InputLabel id="no-of-partitions" style={{ color: '#8b8c8e' }}>
            No. of partitions
          </InputLabel>
          <Select
            labelId="no-of-partitions"
            id="no-of-partitions"
            //   value={age}
            onChange={(e) => {
              setShelfNoOfPar(e.target.value);
            }}
            defaultValue={
              props.isEditable ? props.data.shelfNoOfPar : shelfNoOfPar
            }
            inputProps={{
              style: { color: '#ececec' },
            }}
            SelectDisplayProps={{
              style: { color: '#ececec' },
            }}
          >
            <MenuItem value={1}>2</MenuItem>
            <MenuItem value={2}>5</MenuItem>
            <MenuItem value={3}>10</MenuItem>
          </Select>
        </FormControl>
        <br></br>
      </Box>

      <Box paddingX={4} paddingY={4} display={'flex'} gap={2}>
        <CustomButtonDel
          onClick={() => {
            if (props.isEditable) {
              props.editableFormClosingFunction();
            } else {
              props.handleFormDisplay();
            }
          }}
        >
          <img src={require('../assets/icons/Close.png')}></img>
          <Typography padding={1}>Cancel</Typography>
        </CustomButtonDel>
        <CustomButtonN
          variant="contained"
          onClick={() => {
            if (props.isEditable) {
              updateShelf();
            } else {
              submit();
            }
          }}
        >
          <img src={require('../assets/icons/Check-small.png')}></img>
          <Typography padding={1}>Save</Typography>
        </CustomButtonN>
      </Box>
    </Popover>
  );
}
