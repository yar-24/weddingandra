import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Tema1 from '../images/tema1.png'
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({sx, tema, ...rest}) {
  return (
    <Card sx={sx}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Tema1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tema}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to="/undangan/:name" size="small" color="primary" {...rest}>
          Lihat Tema
        </Button>
        <Button component={Link} to="pilih-harga" size="small" color="primary" variant="contained" {...rest}>
          Pilih Tema
        </Button>
      </CardActions>
    </Card>
  );
}
