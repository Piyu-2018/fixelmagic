import React, { useState, useEffect } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import ShellForm from '../components/ShellForm';
import SideNavbar from '../components/SideNavbar';
import SearchBar from '../components/SearchBar';
import { Divider } from '@mui/material';

const shelfT = ['Small-Freeze', 'Medium-Freeze', 'Large-Freeze'];
const shelfD = ['200x150x40cm', '400x300x80cm', '4800x600x160cm'];

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
  backgroundColor: '#222428',
  color: '#ececec',
  borderColor: '#222428',
}));

const CustomButtonAll = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
  backgroundColor: ' #ffffff',
  color: '#111214',
  borderColor: '#ffffff',
}));

const CustomButtonN = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
}));

const CustomButtonDel = styled(Button)(({ theme }) => ({
  borderRadius: 360,
  textTransform: 'capitalize',
  backgroundColor: '#141518',
  color: '#8b8c8e',
  borderColor: '#8b8c8e',
}));

export default function Home() {
  const theme = useTheme();

  const [openValue, setOpenValue] = useState(false);
  const [open, setOpen] = useState(false);
  const [shelfArray, setShelfArray] = useState([]);
  const [shelfEditableArray, setShelfEditableArray] = useState([]);
  const [editableIndex, setEditableIndex] = useState(0);

  const handleFormDisplay = () => {
    setOpenValue((prevOpenValue) => !prevOpenValue);
  };

  useEffect(() => {
    setAllSshelfData();
  }, []);

  const setAllSshelfData = async () => {
    const allShelf = localStorage.getItem('allShelf')
      ? JSON.parse(localStorage.getItem('allShelf'))
      : [];
    setShelfArray(allShelf);
    await setEditableData(allShelf);
  };

  const setEditableData = async (allShelfData) => {
    const editableArray = Array(allShelfData.length).fill(false);
    setShelfEditableArray(editableArray);
  };

  const deleteShelf = (deletingIndex) => {
    try {
      const newArray = shelfArray.filter((_, index) => index !== deletingIndex);
      setShelfArray(newArray);
      localStorage.setItem('allShelf', JSON.stringify(newArray));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (editableIndex) => {
    console.log(shelfEditableArray);
    const newEditableArray = await Promise.all(
      shelfEditableArray.map((element, index) => {
        if (index === editableIndex) {
          return !element;
        } else {
          return element;
        }
      })
    );
    setEditableIndex(editableIndex);
    setShelfEditableArray(newEditableArray);
  };

  return (
    <Box sx={{ display: 'flex', padding: 1 }}>
      <CssBaseline />
      <SideNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <SearchBar />

        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          sx={{ marginBottom: 3 }}
        >
          <Grid display={'flex'} gap={3} alignItems="flex-start" item xs={8}>
            <CustomButtonAll variant="outlined">All</CustomButtonAll>
            <CustomButton variant="outlined">Freeze</CustomButton>
            <CustomButton variant="outlined">Modular</CustomButton>
            <CustomButton variant="outlined">PegBoard</CustomButton>
          </Grid>
          <Grid display={'flex'} justifyContent={'flex-end'} item xs={4}>
            <CustomButtonN
              borderColor="#0062cc"
              variant="contained"
              onClick={() => {
                handleFormDisplay();
              }}
            >
              <img src={require('../assets/icons/Add.png')}></img>
              <Typography padding={1}>Add Shelf</Typography>
            </CustomButtonN>
          </Grid>
        </Grid>

        <TableContainer
          component={Paper}
          sx={{
            marginBottom: 2,
            backgroundColor: '#222428',
            borderRadius: 8,
            padding: 2,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {shelfArray.length > 0 ? (
                shelfArray.map((row, index) => (
                  <TableRow
                    key={row.shelfID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={2}
                        onClick={() => {
                          handleEdit(index);
                        }}
                      >
                        <Typography>
                          <img src={require('../assets/icons/Snow.png')}></img>
                        </Typography>
                        <Box>
                          <Typography color={'#ececec'}>
                            {row.shelfId}
                          </Typography>
                          <Typography color={'#8b8c8e'}>
                            {row.shelfName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Typography color={'#ececec'}>
                        {shelfT[row.shelfType]}
                      </Typography>
                      <Typography color={'#8b8c8e'}>Sheld type</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography color={'#ececec'}>
                        {shelfD[row.shelfDimention]}
                      </Typography>
                      <Typography color={'#8b8c8e'}>
                        Shelf dimentions
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Box display={'flex'} gap={2} justifyContent={'flex-end'}>
                        <CustomButtonDel
                          variant="outlined"
                          onClick={() => {
                            deleteShelf(index);
                          }}
                        >
                          <img src={require('../assets/icons/Trash.png')}></img>
                          Delete
                        </CustomButtonDel>
                        <CustomButtonDel variant="outlined" colour={'#8b8c8e'}>
                          <img src={require('../assets/icons/Gear.png')}></img>
                        </CustomButtonDel>
                      </Box>
                    </TableCell>
                    <Divider />
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <ShellForm
        openValue={openValue}
        handleFormDisplay={handleFormDisplay}
        key={1}
        isEditable={false}
        setAllSshelfData={setAllSshelfData}
      />

      <ShellForm
        openValue={shelfEditableArray[editableIndex]}
        handleFormDisplay={handleFormDisplay}
        isEditable={shelfEditableArray[editableIndex]}
        data={shelfArray[editableIndex]}
        editableFormClosingFunction={() => {
          handleEdit(editableIndex);
        }}
        editableIndex={editableIndex}
        setAllSshelfData={setAllSshelfData}
      />
    </Box>
  );
}
