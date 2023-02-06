import * as React from 'react';
import { styled } from '@mui/material/styles';

import {MdKeyboardArrowDown} from 'react-icons/md'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    margin:'20px',
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<MdKeyboardArrowDown sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container style={{width: "80%"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Berapa lama masa aktif undangan saya?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          tidak ada masa aktif. dengan kata lain undangan anda akan aktif selamanya. jadi kamu bisa aktifkan sekarang untuk di pakai kapanpun.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Bagaimana cara buat undangan digital?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Pilih paket yang diinginkan, klik pesan, masukkan data dirimu & pilih metode pembayarannya. Setelah pembayaran terverifikasi, kamu dapat mulai memasukkan data dirimu & pasangan, data acara, foto-foto dan undanganmu langsung jadi dan dapat disebarkan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Berapa Lama Proses Pembuatannya</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Untuk pembuatan undangan digital hanya membutuhkan waktu sekitar 10 menit untuk mengisi data-data yang diperlukan dan undangan digital kamu sudah siap untuk disebarkan.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}