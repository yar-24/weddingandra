import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import { Navbar } from "../../components";
import { Accordion, Fitur, Harga, Header, Pembayaran } from "../../container";
import { BsWhatsapp } from "react-icons/bs";

const LandingPage = ({user}) => {
  return (
    <div>
      <Navbar user={user} />
      <Header user={user} />
      <Fitur />
      <Harga />
      <Accordion />
      <Pembayaran />
      <Box sx={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 5 }}>
        <Button
          size="large"
          variant="contained"
          endIcon={<BsWhatsapp />}
          target="_blank"
          href="https://wa.me/6287774217814"
        >
          Hubungi Kami
        </Button>
      </Box>
    </div>
  );
};

export default LandingPage;
