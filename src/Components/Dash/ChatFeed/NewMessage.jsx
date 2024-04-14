import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import StyledBadge from '@mui/material/Badge';
import SendIcon from '@mui/icons-material/Send';
function NewMessage() {
  return (
    <>
         <p className='chat__message'>
        
          <span className='chat__name'>Kelvin</span>



          This is a message
          <span className='chat__timestamp'>
            {new Date().toUTCString()}
          </span>

        </p>
        <p className='chat__message chat__reciever'>
      
          <span className='chat__name'>Omar</span>
          This is a message
          <span className='chat__timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: 16}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      </Box>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type a message"
        inputProps={{ 'aria-label': '' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SendIcon/>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      </IconButton>
    </Paper>
      
    </>
  )
}

export default NewMessage

