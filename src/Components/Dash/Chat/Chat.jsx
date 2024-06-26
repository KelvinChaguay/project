import React, { useEffect, useState } from 'react';
import { Avatar, Icon, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css';
function Chat({messages}) {
  const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        console.log('You typed >>>', e.target.value)
      

   await axios.post('/messages/new', {
        message: input,
        name: 'Demo App',
        timestamp: 'Just now',
        received: false
    });

    setInput('');
    };




  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Las seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>

      </div>
      <div className='chat__body'>
      {messages.map((message) => (
                <p className={`chat__message ${message.received && 'chat__reciever'}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>{message.timestamp}</span>
                </p>
            ))}

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
      </div>
      <div className='chat__footer'>
      <InsertEmoticonIcon/>
            <form>
                <input value = {input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick= {sendMessage} type='submit'>Send a message

                    </button>
                
            </form>
            <MicIcon/>

            </div>






    </div>
  )
}

export default Chat
