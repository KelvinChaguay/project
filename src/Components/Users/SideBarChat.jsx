import { Avatar } from '@mui/material'
import React from 'react'
import UsersCss from "./Users.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function SidebarChat() {
  return (
    <div>
      <Avatar />
      <div className={UsersCss['user__avatar']}>
      <br></br>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Add User
      </Button>
      <Button variant="outlined" color="error">
        Delete 
      </Button>
    </Stack>
      </div>
    </div>
  )
}

export default SidebarChat
