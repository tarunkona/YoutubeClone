import React from 'react'
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/CheckCircle';
function ChannelRow({image, Channel, subs, id, description, verified}){
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={Channel} src={image} />
            <div className="channelRow__text">
                <h4>{Channel}  {verified && <VerifiedIcon className="icon"/>}</h4>
                <p><strong>{id}</strong> • {subs} subscribers</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;