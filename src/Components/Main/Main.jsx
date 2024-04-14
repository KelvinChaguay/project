import * as React from 'react';
import Lottie from "lottie-react";
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Button, AppBar, Toolbar, Box, Grid, Avatar } from '@mui/material';
import logo from '../../assets/icons/strife.jpeg';
import { keyframes } from '@emotion/react';
import Paper from '@mui/material/Paper';

// Theme
const theme = createTheme({
  typography: {
    fontFamily: '"Orbitron", sans-serif',
  },
  palette: {
    primary: {
      main: '#E0E0EA',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

const Item = styled(Paper)`
  padding: 1rem;
  text-align: center;
  color: white;
  background-color: #333;
  border-radius: 10px;
  textAlign: 'center';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackgroundColor= styled(Lottie)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1c1e21;
  padding: theme.spacing(1);
  align-items: 'center';
  justify-content: 'center';
  textAlign: 'center';
  z-index: -1;
`;

const moveLeftRight = keyframes`
  0% {
    transform: translateX(1%);
  }
  25% {
    transform: translateX(-0.5%);
  }
  50% {
    transform: translateX(-2%);
  }
  75% {
    transform: translateX(-0.5%);
  }
  100% {
    transform: translateX(1%);
  }
`;

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor/>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="Stripe Logo" height="50" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <Box display="flex" flexGrow={1}>
            <Button color="inherit" href="/home/main/signUp">Sign Up</Button>
          </Box>
          <Button color="inherit" href="/home/main/sign">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p:6,flexGrow: 1 }}>
        <Grid minHeight={160}>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Avatar  src={logo} alt="Stripe Logo" height="50" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          </Grid>
        </Grid>
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', // This makes the Box take up the full viewport height
          flexDirection: 'column' // This makes the Box's children stack vertically
        }}
      >
        <Box component="section" sx={{ p: 6, textAlign: 'center', color: 'white' , fontSize:'30px'}}>
          The Space where connections are forged
        </Box>
        <Box sx={{ width: 1, animation: `${moveLeftRight} 2s linear infinite` }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8">
              <Item>🙋🏿‍♀️ Hello Friend.</Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>😄 Nice to see ya.</Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>🐱‍👤 No worries.</Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>👀 Find me closer.</Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>🙋‍♂️ Hello Friend.</Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>😎 Nice to see ya.</Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>😼 No worries. </Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>👀 Find me closer.</Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>🙋‍♀️ Add me.</Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>🎮 Fun. </Item>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}



export default Main