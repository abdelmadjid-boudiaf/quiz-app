import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const RoutLayout = () => {
  return (
      <Container maxWidth='sm'>
          <Box textAlign='center' mt={5}>
               <Outlet />
          </Box>
         
      </Container>
  )
}

export default RoutLayout