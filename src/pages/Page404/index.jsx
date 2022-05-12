import React from 'react'
import { Typography, Box, Link } from '@mui/material'
import './style.css'

export default function index() {
  return (
    <Box
      sx={{
        width: '90%',
        background: '#F8F9FC',
        height: '90vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      }}>
      <Typography className='h1' variant='h1' sx={{mt:'30px'}}>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </Typography>
      <Typography variant='h5' sx={{ padding: '0px 0px 60px 0px' }}>Page Not Found</Typography>
      <Typography>It looks like you found a glitch in the matrix...</Typography>
      <Link>&larr; Back to Dashboard</Link>
    </Box>
  )
}
