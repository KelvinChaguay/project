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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Profile = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    const BackgroundColor = styled(Lottie)`
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
                    Public Profile
                </Box>

                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Basic Information" {...a11yProps(0)} />
                        <Tab label="Profile Picture" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <AccountBoxIcon /> Display Name
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#e9e9ea', borderRadius: '5px' }}>

                                <div >
                                    <FormHelperText id="outlined-weight-helper-text" style={{ fontSize: '15px', color: '#000000' }}>Change Username</FormHelperText>
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
                                </div>
                           
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Profile Picture
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                           
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <p>PNG, GIF or JPG</p>
                    </TabPanel>

                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#e9e9ea', borderRadius: '5px' }}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vh">
                        <div >
                            <br></br>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#000000', fontSize: '20px', paddingLeft: '100px' }}>
                                    <img src={logo} alt="logo" style={{ width: '100px', height: '100px', alignItems:'center', borderRadius:'50%' }} />
                                </Box>
                            </FormControl>
                        </div>
                    </Box>
                </Box>


                <Stack direction="row" spacing={2} >
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="left" width="100vh">

                        <Button style={{ width: '100vw' }} variant="contained" color="success">
                            Save Changes
                        </Button>
                    </Box>

                </Stack>
                <Box component="section" sx={{ p: 3, textAlign: 'left', color: '#ffffff', fontSize: '15px' }}>

                    <Typography
                        variant="h9"
                        component="a"
                        href="/home/main/sign/dash"
                        style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left', paddingLeft: '10px' }}
                    >
                        Back to Strife
                    </Typography>
                </Box>

                <Box component="section" sx={{ p: 1, textAlign: 'left', color: '#fffff', fontSize: '15px' }}>

                    <Typography
                        variant="h9"
                        component="a"
                        href="/home/main/sign/dash/logout"
                        style={{ textDecoration: 'none', color: '#ffffff', cursor: 'pointer', p: 0.5, textAlign: 'left' }}
                    >
                        Log out
                    </Typography>
                </Box>


            </ThemeProvider>
        </>
    )
}


export default Profile
