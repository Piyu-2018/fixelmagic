import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Shelf front 0001', 'Medium-Freeze', '200x150x40cm'),
  createData('Shelf front 0001', 'Medium-Freeze', '200x150x40cm'),
  createData('Shelf front 0001', 'Medium-Freeze', '200x150x40cm'),
  createData('Shelf front 0001', 'Medium-Freeze', '200x150x40cm'),
  createData('Shelf front 0001', 'Medium-Freeze', '200x150x40cm'),
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const open = Boolean(anchorEl);
  //   const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid display={'flex'} gap={3} alignItems="flex-start" item xs={8}>
            <Button>All</Button>
            <Button>Freeze</Button>
            <Button>Modular</Button>
            <Button>PegBoard</Button>
          </Grid>
          <Grid display={'flex'} justifyContent={'flex-end'} item xs={4}>
            <Button borderColor="#0062cc" variant="contained">
              <img src={require('../assets/icons/Add.png')}></img>
              <Typography padding={1}>Add Shelf</Typography>
            </Button>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                    ></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Popover
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent="space-between"
          alignItems={'center'}
          padding={2}
        >
          <Box>
            <Typography>@222b2hh</Typography>
            <h2>Add new shelf</h2>
          </Box>
          <Button>
            <img src={require('../assets/icons/Close.png')}></img>
          </Button>
        </Box>
        <Box padding={5} display={'flex'} gap={0.5} flexDirection={'column'}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <br></br>

          <TextField id="filled-basic" label="Filled" variant="filled" />
          <br></br>

          <TextField id="filled-basic" label="Filled" variant="filled" />
          <br></br>

          <TextField id="filled-basic" label="Filled" variant="filled" />
          <br></br>

          <TextField id="filled-basic" label="Filled" variant="filled" />
          <br></br>
        </Box>

        <Box>
          <Button>
            <img src={require('../assets/icons/Close.png')}></img>
            <Typography padding={1}>Cancel</Typography>
          </Button>
          <Button variant="contained">
            <img src={require('../assets/icons/Check-small.png')}></img>
            <Typography padding={1}>Save</Typography>
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}
