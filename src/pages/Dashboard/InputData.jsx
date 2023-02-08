import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { getDatabase, ref, set } from "firebase/database";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function InputData({ user }) {
  const navigate = useNavigate();

  // ISI DATA PRIA
  const [namaP, setNamaP] = React.useState("");
  const [namaAyahP, setNamaAyahP] = React.useState("");
  const [namaIbuP, setNamaIbuP] = React.useState("");
  const [anakKeP, setAnakKeP] = React.useState("");
  const [instaP, setInstaP] = React.useState("");

  // ISI DATA WANITA
  const [namaW, setNamaW] = React.useState("");
  const [namaAyahW, setNamaAyahW] = React.useState("");
  const [namaIbuW, setNamaIbuW] = React.useState("");
  const [anakKeW, setAnakKeW] = React.useState("");
  const [instaW, setInstaW] = React.useState("");

  // ISI DATA AKAD
  const [almtAk, setAlmtAk] = React.useState("");
  const [namaLokAk, setNamaLokAk] = React.useState("");
  const [tglAk, setTglAk] = React.useState("");
  const [waktuAk, setWaktuAk] = React.useState("");
  const [waktuSelesaiAk, setWaktuSelesaiAk] = React.useState("");
  const [zonaWakAk, setZonaWakAk] = React.useState("");

  //ISI DATA RESEPSI
  const [almtRe, setAlmtRe] = React.useState("");
  const [namaLokRe, setNamaLokRe] = React.useState("");
  const [tglRe, setTglRe] = React.useState("");
  const [waktuRe, setWaktuRe] = React.useState("");
  const [waktuSelesaiRe, setWaktuSelesaiRe] = React.useState("");
  const [zonaWakRe, setZonaWakRe] = React.useState("");

  const onSubmit = async () => {
    if (
      namaP &&
      namaAyahP &&
      namaIbuP &&
      anakKeP &&
      instaP &&
      namaW &&
      namaAyahW &&
      namaIbuW &&
      anakKeW &&
      instaW &&
      almtAk &&
      namaLokAk &&
      tglAk &&
      waktuAk &&
      waktuSelesaiAk &&
      zonaWakAk &&
      almtRe &&
      namaLokRe &&
      tglRe &&
      waktuRe &&
      waktuSelesaiRe &&
      zonaWakRe
    ) {
      const db = getDatabase();
      set(ref(db, "dataUndangan/" + user.uid), {
        namaP: namaP,
        namaAyahP: namaAyahP,
        namaIbuP: namaIbuP,
        anakKeP: anakKeP,
        instaP: instaP,
        namaW: namaW,
        namaAyahW: namaAyahW,
        namaIbuW: namaIbuW,
        anakKeW: anakKeW,
        instaW: instaW,
        almtAk: almtAk,
        namaLokAk: namaLokAk,
        tglAk: tglAk,
        waktuAk: waktuAk,
        waktuSelesaiAk: waktuSelesaiAk,
        zonaWakAk: zonaWakAk,
        almtRe: almtRe,
        namaLokRe: namaLokRe,
        tglRe: tglRe,
        waktuRe: waktuRe,
        waktuSelesaiRe: waktuSelesaiRe,
        zonaWakRe: zonaWakRe,
      }).then((res) => {
          navigate("/dashboard/pilih-harga");
        });
    } else {
      alert("harus diisi semua");
    }
  };

  const currencies = [
    {
      value: "WIB",
      label: "WIB (Indonesia Barat)",
    },
    {
      value: "WITA",
      label: "WITA (Indonesia Tengah)",
    },
    {
      value: "WIT",
      label: "WIT (Indonesia Timur)",
    },
  ];

  return (
    <>
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
              value={namaP}
              onChange={(e) => setNamaP(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Ayah Pria</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaAyahP}
              onChange={(e) => setNamaAyahP(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Ibu Pria</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaIbuP}
              onChange={(e) => setNamaIbuP(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Urutan Anak Pria</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={anakKeP}
              onChange={(e) => setAnakKeP(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">
              Username Instagram
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={instaP}
              onChange={(e) => setInstaP(e.target.value)}
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
              value={namaW}
              onChange={(e) => setNamaW(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Ayah Wanita</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaAyahW}
              onChange={(e) => setNamaAyahW(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Ibu Wanita</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaIbuW}
              onChange={(e) => setNamaIbuW(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">
              Urutan Anak Wanita
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={anakKeW}
              onChange={(e) => setAnakKeW(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">
              Username Instagram
            </InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={instaW}
              onChange={(e) => setInstaW(e.target.value)}
            />
          </FormControl>
        </Item>
      </Stack>

      <Stack direction="row" spacing={2} mt={3}>
        <Item sx={{ p: 4, width: "100%" }}>
          <Typography variant="h5">Lokasi Acara Akad</Typography>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Alamat Acara</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={almtAk}
              onChange={(e) => setAlmtAk(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Lokasi</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaLokAk}
              onChange={(e) => setNamaLokAk(e.target.value)}
            />
          </FormControl>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="filled-basic"
              label="Tanggal Pernikahan"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              value={tglAk}
              onChange={(e) => setTglAk(e.target.value)}
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
              value={waktuAk}
              onChange={(e) => setWaktuAk(e.target.value)}
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
              value={waktuSelesaiAk}
              onChange={(e) => setWaktuSelesaiAk(e.target.value)}
            />
          </Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="WIB"
            helperText="Tampilan Zona Waktu"
            sx={{ mt: 3, width: "30%" }}
            value={zonaWakAk}
            onChange={(e) => setZonaWakAk(e.target.value)}
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
            <InputLabel htmlFor="component-helper">Alamat Acara</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={almtRe}
              onChange={(e) => setAlmtRe(e.target.value)}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mt: 4 }}>
            <InputLabel htmlFor="component-helper">Nama Lokasi</InputLabel>
            <Input
              id="component-helper"
              aria-describedby="component-helper-text"
              value={namaLokRe}
              onChange={(e) => setNamaLokRe(e.target.value)}
            />
          </FormControl>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="filled-basic"
              label="Tanggal Pernikahan"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              value={tglRe}
              onChange={(e) => setTglRe(e.target.value)}
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
              value={waktuRe}
              onChange={(e) => setWaktuRe(e.target.value)}
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
              value={waktuSelesaiRe}
              onChange={(e) => setWaktuSelesaiRe(e.target.value)}
            />
          </Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="WIB"
            helperText="Tampilan Zona Waktu"
            sx={{ mt: 3, width: "30%" }}
            value={zonaWakRe}
            onChange={(e) => setZonaWakRe(e.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Item>
      </Stack>
      <Button sx={{ m: 4 }} variant="contained" onClick={onSubmit}>
        Simpan
      </Button>
    </>
    //   </Main>
    // </Box>
  );
}
