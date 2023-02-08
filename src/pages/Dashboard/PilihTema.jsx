import { Grid } from '@mui/material'
import React from 'react'
import CardTema from '../../components/CardTema'

const PilihTema = () => {
  return (
    <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
  >
    {Array.from(Array(3)).map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
        {index === 0 && 2 ? (
          <CardTema sx={{ maxWidth: 345 }} tema="tema 1" />
        ) : (
          <CardTema sx={{ maxWidth: 345, opacity: 0.5 }} tema="coming soon" disabled />
        )}
      </Grid>
    ))}
  </Grid>
  )
}

export default PilihTema