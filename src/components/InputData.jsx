import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiAppBar from "@mui/material/AppBar";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import Paper from "@mui/material/Paper";

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(5, 20, 10, 20),
    // paddingLeft: theme.spacing(5)
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function InputData() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogout = async () => {
    await signOut(auth).then((response) => {
      navigate("/");
    });
  };

  const currencies = [
    {
      value: 'WIB',
      label: 'WIB (Indonesia Barat)',
    },
    {
      value: 'WITA',
      label: 'WITA (Indonesia Tengah)',
    },
    {
      value: 'WIT',
      label: 'WIT (Indonesia Timur)',
    },

  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard User
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding component={Link} to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={onLogout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Stack direction="row" spacing={2}>
          <Item sx={{ p: 4, width: "50%" }}>
            <Typography variant="h5">Input data pria</Typography>
            <Button
              sx={{ width: "50%", mt: 3 }}
              variant="contained"
              component="label"
            >
              Upload gambar
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Nama Lengkap Pria
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Nama Ayah Pria</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Nama Ibu Pria</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Urutan Anak Pria
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Username Instagram
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
          </Item>
          <Item sx={{ p: 4, width: "50%" }}>
            <Typography variant="h5">Input data wanita</Typography>
            <Button
              sx={{ width: "50%", mt: 3 }}
              variant="contained"
              component="label"
            >
              Upload gambar
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Nama Lengkap Wanita
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Nama Ayah Wanita
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Nama Ibu Wanita
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Urutan Anak Wanita
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">
                Username Instagram
              </InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
          </Item>
        </Stack>


        <Stack direction="row" spacing={2}>
          <Item sx={{ p: 4, width: "100%" }}>
            <Typography variant="h5">Lokasi Acara Akad</Typography>

            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Judul Acara</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Alamat Acara</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Nama Lokasi</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                id="filled-basic"
                label="Tanggal Pernikahan"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
              <TextField
                sx={{ width: "20%" }}
                id="filled-basic"
                label="Waktu Pernikahan"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="time"
              />
              <TextField
                sx={{ width: "20%" }}
                id="filled-basic"
                label="Waktu Selesai Acara"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="time"
              />
            </Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="WIB"
              helperText="Tampilan Zona Waktu"
              sx={{mt: 3, width: "30%"}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Item>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Item sx={{ p: 4, width: "100%" }}>
            <Typography variant="h5">Lokasi Acara Resepsi</Typography>

            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Judul Acara</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Alamat Acara</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ mt: 4 }}>
              <InputLabel htmlFor="component-helper">Nama Lokasi</InputLabel>
              <Input
                id="component-helper"
                aria-describedby="component-helper-text"
              />
            </FormControl>
            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                id="filled-basic"
                label="Tanggal Pernikahan"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
              <TextField
                sx={{ width: "20%" }}
                id="filled-basic"
                label="Waktu Pernikahan"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="time"
              />
              <TextField
                sx={{ width: "20%" }}
                id="filled-basic"
                label="Waktu Selesai Acara"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                type="time"
              />
            </Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="WIB"
              helperText="Tampilan Zona Waktu"
              sx={{mt: 3, width: "30%"}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Item>
        </Stack>
        <Button sx={{ m: 4 }} variant="contained">
          Simpan
        </Button>
      </Main>
    </Box>
  );
}
