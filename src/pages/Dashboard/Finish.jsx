import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Finish = () => {

  return (
    <Container>
        <Stack spacing={2}>
            <Button component={Link} to={`/undangan/:name`} variant='contained'>Lihat Link Undangan</Button>
            <Button variant='outlined'>Lihat Pembayaran</Button>
        </Stack>
    </Container>
  )
}

export default Finish