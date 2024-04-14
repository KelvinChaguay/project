import logo from '../../assets/icons/strife.jpeg';
import React from 'react';
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, ThemeProvider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Card, CardContent } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Lottie from "lottie-react";
import { createTheme } from '@mui/material/styles';

const UserSetting = () => {
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


    return (

        <>
        
        <ThemeProvider theme={theme}>
        <BackgroundColor />
         <Box component="section" sx={{ p: 4, textAlign: 'left', color: '#ffffff', fontSize: '40px', paddingLeft: '100px' }}>
            Account settings
        </Box>
            <Box component="section" sx={{ p: 3, textAlign: 'left', color: '#ffffff', fontSize: '30px', paddingLeft: '100px' }}>
                Security
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor:'#e9e9ea', borderRadius:'5px' }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vh">
                    <div >
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px', color:'#000000' }}>E-mail address</FormHelperText>
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

                            <Stack direction="row" spacing={2} >
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100vh">

                                    <Button href='/home/main/sign/dash' variant="contained" color="success">
                                        Save
                                    </Button>
                                </Box>

                            </Stack>

                            <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#000000', fontSize: '20px', paddingLeft: '100px' }}>
                           <InboxIcon/> Change 
                            </Box>
                        </FormControl>
                        <div style={{color:'#000000'}} ><DeleteIcon />If you wish to delete your account, you can <bold> proceed here.</bold>You will be asked for confirmation.</div><br></br>


                    </div>
                </Box>
            </Box>
            <Box component="section" sx={{p: 3, textAlign: 'left', color: '#ffffff', fontSize: '15px' }}>

                <Typography
                    variant="h9"
                    component="a"
                    href="/main/home/signUp"
                    style={{  textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left', paddingLeft: '10px' }}
                >
                    Back to Strife
                </Typography>
            </Box>

            <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#fffff', fontSize: '15px'}}>

                <Typography
                    variant="h9"
                    component="a"
                    href="/main/home/signUp"
                    style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left'}}
                >
                    Log out
                </Typography>
            </Box>


</ThemeProvider>
        </>
    )
}


export default UserSetting
