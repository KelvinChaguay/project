import React from 'react';
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Card, CardContent } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Lottie from "lottie-react";


function Sign() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const theme = createTheme({
        typography: {
          fontFamily: '"Orbitron", sans-serif',
        },
        palette: {
          primary: {
            main: '#101418',
          },
            success: {
                main: '#14b26b',
            },
            error: {
                main: '#8794a6',
            },
        },
      
      
      });

      
const BackgroundAnimation = styled(Lottie)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #1c1e21;
z-index: -1;

`;

    
    

  return (
    <>
    
      <BackgroundAnimation/>
      <Box component="section" sx={{ p: 4, textAlign: 'left', color: '#E9E9EA', fontSize: '40px', paddingLeft:'100px' }}>
                Welcome back!
            </Box>
            <Box component="section" sx={{ p: 3, textAlign: 'left', color: '#E9E9EA', fontSize: '20px', paddingLeft:'100px' }}>
                We're so excited to see you again!
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor:'#E9E9EA', borderRadius:'5px' }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vh" >
                    <div >
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px',color:'#909298' }}>E-mail address</FormHelperText>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor=""></InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment></InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"//
                                inputProps={{
                                    'aria-label': 'weight',
                                    
                                }}
                            />
                        </FormControl>
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px', color:'#909298' }}>Password</FormHelperText>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                    </div>
                </Box>
            </Box>
            <br></br>
            <Stack direction="row" spacing={2} >
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100vh">

                    <Button href='/home/main/sign/dash' variant="contained" color="success">
                        Log In
                    </Button>
                </Box>

            </Stack>
            <br></br>
            <Box component="section" sx={{ p: 1, textAlign: 'left', color: 'black', fontSize: '15px' ,  paddingLeft:'10px'}}>
                
                <Typography
                    variant="h9"
                    component="a"
                    href="/main/home/signUp"
                    style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left',  paddingLeft:'100px' }}
                >
                    Sign up
                </Typography>
            </Box>
            <Box component="section" sx={{ p: 0.5, textAlign: 'left', color: 'black', fontSize: '15px' ,  paddingLeft:'10px'}}>
                
                <Typography
                    variant="h9"
                    component="a"
                    href="forgot_pass"
                    style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left',  paddingLeft:'100px' }}
                >
                    Forgot your password?
                </Typography>
            </Box>
            <Box component="section" sx={{ p: 0.5, textAlign: 'left', color: '#fffff', fontSize: '15px' ,  paddingLeft:'10px'}}>
                
                <Typography
                    variant="h9"
                    component="a"
                    href="forgot_pass"
                    style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left',  paddingLeft:'100px' }}
                >
                   Didn't recieve confirmation?
                </Typography>
            </Box>      
        </>
  )
}

export default Sign
