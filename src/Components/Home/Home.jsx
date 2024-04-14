import * as React from 'react';
import Lottie from "lottie-react";
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import strifeBackAnimation from './back-ground.json';
// Imports For Header
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../../assets/icons/strife.jpeg';
// Imports For Main Content
import { Box, Card, CardContent, Container, Fade, Grid, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import strifeUser from './strifeUser.json';
// Theme
// 
const theme = createTheme({
  typography: {
    fontFamily: '"Orbitron", sans-serif',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },


});

const BackgroundAnimation = styled(Lottie)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000000;
z-index: -1;
`;


function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };



  return (

    
      <ThemeProvider theme={theme}>
        <Box>
          <BackgroundAnimation animationData={strifeBackAnimation} />

          {/* Header */}

          <AppBar position="static">
            <Toolbar>
              <img src={logo} alt="Stripe Logo" height="50" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <Button color="inherit" href="/">Home</Button>
              <Button color="inherit" href="/about">About</Button>
            </Toolbar>
          </AppBar>

          {/* End Header */}

          {/* Main Content */}
          <Fade in={true} timeout={1000}>
            <Container maxWidth="md" component="main">
              <Box sx={{ my: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom style={{ color: 'white' }}>
                  Welcome to Strife
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom style={{ color: 'white' }}>
                  {'We provide the best services for you.'}
                </Typography>
                <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
                  {'This app provides the best features for you to use.'}
                </Typography>
                <Button color="inherit" variant="contained" size="large" href="/home/main">
                  Get Started
                </Button>
              </Box>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        <ChatIcon />   Normal Chat
                      </Typography>
                      <Typography variant="body2">
                        Enjoy our free individual room website to joing single real-time conversations.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        <GroupsIcon /> Group Chat
                      </Typography>
                      <Typography variant="body2">
                        Access our free chat room webstite to join group conversations.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        <FilePresentIcon />   Send Data
                      </Typography>
                      <Typography variant="body2">
                        Send and recieved documents on our free chat website with no issues.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Lottie animationData={strifeUser} />;
            </Container>

          </Fade>
          {/* End of Main Content */}

          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

            <Typography variant="body2" color="text.secondary" align="center">
              {'© '}
              {new Date().getFullYear()}
              {' Strife. All rights reserved.'}
            </Typography>
          </Box>
          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>{"Anonymous Information"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is some anonymous information...
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Close</Button>
            </DialogActions>
          </Dialog>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose} message="Contact us clicked!" />

        
        </Box>

      </ThemeProvider>





  )
}

export default Home
