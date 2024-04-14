import logo from '../../assets/icons/strife.jpeg';
import React from 'react';
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, ThemeProvider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Card, CardContent } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { styled } from '@mui/system';
import Lottie from "lottie-react";
import { createTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import PaletteIcon from '@mui/icons-material/Palette';

const countries = [


    { code: 'ES', label: 'Spanish' },
    {
        code: 'US',
        label: 'English',
    }

];

const themes = [
    { code: 'light', label: 'Light' },
    {
        code: 'dark',
        label: 'Dark',
    }
];
const Appearance = () => {
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
            Appearance
        </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>

                    <Stack direction="row" spacing={3} paddingLeft="0px">

                        <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 180, backgroundColor: '#E9E9EA', borderRadius: '5px' }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        alt=""
                                    />
                                    {option.label} ({option.code})
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Site Theme"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                        <Autocomplete
                            id="theme-select-demo"
                            sx={{ width: 180, backgroundColor: '#E9E9EA', borderRadius: '5px' }}
                            options={themes}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        srcSet=""
                                        src=""
                                        alt=""
                                    />
                                    {option.label} ({option.code})
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Interface Language"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor:'#e9e9ea', borderRadius:'5px' }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vh">
                    <div >
                    <br></br>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#000000', fontSize: '20px', paddingLeft: '100px' }}>
                           <PaletteIcon/> 
                            </Box>
                        </FormControl>
                    </div>
                </Box>
            </Box>

            
            <Stack direction="row" spacing={2} >
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100vh">

                                    <Button  style={{width:'100vw'}} variant="contained" color="success">
                                        Save
                                    </Button>
                                </Box>

                            </Stack>
            <Box component="section" sx={{p: 3, textAlign: 'left', color: '#ffffff', fontSize: '15px' }}>

                <Typography
                    variant="h9"
                    component="a"
                    href="/home/main/sign/dash"
                    style={{  textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left', paddingLeft: '10px' }}
                >
                    Back to Strife
                </Typography>
            </Box>

            <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#fffff', fontSize: '15px'}}>

                <Typography
                    variant="h9"
                    component="a"
                    href="/home/main/sign/dash/logout"
                    style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left'}}
                >
                    Log out
                </Typography>
            </Box>


</ThemeProvider>
        </>
    )
}


export default Appearance
