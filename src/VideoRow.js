import React from 'react'
import { Avatar } from '@mui/material';
import './VideoRow.css';
function VideoRow({title, views, timestamp, image, logo,channel,description}){
    return (
        <div className="videoRow">
            <img  src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>{views} • {timestamp}</p>
                <div className="videoRow__channel">
                    <Avatar className="videoRow__logo" src={logo} alt={channel}/>
                    {channel}
                </div> 
                <p>{description}</p>  
            </div> 
        </div>
    );
}

export default VideoRow;