import React, { useRef, useContext } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Card, CardContent } from '@mui/material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>

            <Box component="section" sx={{ p: 4, textAlign: 'left', color: 'black', fontSize: '40px', paddingLeft: '100px' }}>
                Let's get you ready
            </Box>
            <Box component="section" sx={{ p: 3, textAlign: 'left', color: 'black', fontSize: '20px', paddingLeft: '100px' }}>
                With this strife account, your'll be able to gain access.
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vh">
                    <div >
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px' }}>Username</FormHelperText>
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
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px' }}>E-mail address</FormHelperText>
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
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px' }}>Password</FormHelperText>
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
                        <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px' }}>Confirm password</FormHelperText>
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
            <Stack direction="row" spacing={2} >
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100vh">

                    <Button href='/dashboard' variant="contained" color="success">
                        CREATE AN ACCOUNT
                    </Button>
                </Box>

            </Stack>

            <FormGroup>
                <FormControlLabel required control={<Checkbox />} label="I have read and agree to the strife terms" />

            </FormGroup>
            <Box component="section" sx={{ p: 0.5, textAlign: 'left', color: 'black', fontSize: '15px', paddingLeft: '100px' }}>

                <Typography
                    variant="h9"
                    component="a"
                    href="/home/main/sign"
                    style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', p: 0.5, textAlign: 'left', paddingLeft: '100px' }}
                >
                    Log in
                </Typography>
            </Box>
            <Box component="section" sx={{ p: 0.5, textAlign: 'left', color: 'black', fontSize: '15px', paddingLeft: '100px' }}>

                <Typography
                    variant="h9"
                    component="a"
                    href="forgot_pass"
                    style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', p: 0.5, textAlign: 'left', paddingLeft: '100px' }}
                >
                    Didn't recieve confirmation?
                </Typography>
            </Box>

            <Box component="section" sx={{ p: 0.5, textAlign: 'right', color: 'black', fontSize: '15px', paddingLeft: '100px' }}>

            </Box>




        </>
    )
}


export default SignUp

