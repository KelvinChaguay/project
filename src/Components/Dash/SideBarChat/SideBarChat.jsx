import React from 'react';
import './SideBarChat.css';
import { Avatar } from '@mui/material';
function SideBarChat() {
  return (
    <div className='sidebarChat'>
    <Avatar/>
    <div className='sidebarChat__info'>
        <h2>User One</h2>
        <p>Strife Messages</p>
    </div>
      
    </div>
  )
}

export default SideBarChat
