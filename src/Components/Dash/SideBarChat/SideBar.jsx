import React, { useState, useEffect } from 'react';
import './SideBar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SideBarChat';
// rfce
function SideBar() {
  

  
  return (
    <div>
      <div className='search__header'>
        <Avatar src='../public/' />
        <div className='sidebar__headerRight'>
        </div>
      </div>
      <div className='search'>
        <div className='searchContainer'>
          <SearchIcon />
          <input placeholder='Search or start new chat' type='text'></input>
        </div>
      </div>
      <div className='search__chats'>
        <SidebarChat />
      </div>
    </div>
  )
}
export default SideBar

